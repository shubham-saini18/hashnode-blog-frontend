import Cookies from 'js-cookie';
import { useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from './contexts/appContext';

const GA_TRACKING_ID = 'G-72XG3F8LNJ'; // Hashnode's GA tracking ID
const isProd = process.env.NEXT_PUBLIC_MODE === 'production';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_URL || '';

export const Analytics = () => {
  const { publication, post } = useAppContext();

  useEffect(() => {
    if (!isProd) return;

    const sendAnalytics = async () => {
      await sendPageViewsToGoogleAnalytics();
      await sendViewsToInternalAnalytics();
      await sendViewsToAnalyticsDashboard();
    };

    sendAnalytics().catch(console.error); // Catch any errors during sending

    // Cleanup if needed
    return () => {
      // Any cleanup actions can go here
    };
  }, []);

  if (!isProd) return null;

  const sendPageViewsToGoogleAnalytics = useCallback(async () => {
    // @ts-ignore
    window.gtag('config', GA_TRACKING_ID, {
      transport_url: 'https://ping.hashnode.com',
      first_party_collection: true,
    });
  }, []);

  const sendViewsToInternalAnalytics = useCallback(async () => {
    const event = {
      event_type: 'pageview',
      time: Date.now(),
      event_properties: {
        hostname: window.location.hostname,
        url: window.location.pathname,
        eventType: 'pageview',
        publicationId: publication.id,
        dateAdded: Date.now(),
        referrer: document.referrer,
      },
    };

    let deviceId = Cookies.get('__amplitudeDeviceID');
    if (!deviceId) {
      deviceId = uuidv4();
      Cookies.set('__amplitudeDeviceID', deviceId, { expires: 365 * 2 });
    }

    event.device_id = deviceId;

    try {
      await fetch(`${BASE_PATH}/ping/data-event`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ events: [event] }),
      });
    } catch (error) {
      console.error('Error sending internal analytics:', error);
    }
  }, [publication.id]);

  const sendViewsToAnalyticsDashboard = useCallback(async () => {
    const currentFullURL = window.location.href; // Simplified to get the full URL
    const query = new URL(currentFullURL).searchParams;

    const data = {
      publicationId: publication.id,
      postId: post?.id,
      timestamp: Date.now(),
      url: currentFullURL,
      referrer: document.referrer.includes(window.location.hostname) ? '' : document.referrer,
      title: document.title,
      charset: document.characterSet || document.charset,
      lang: window.navigator.language,
      userAgent: window.navigator.userAgent,
      historyLength: window.history.length,
      timezoneOffset: new Date().getTimezoneOffset(),
      utm_id: query.get('utm_id'),
      utm_campaign: query.get('utm_campaign'),
      utm_source: query.get('utm_source'),
      utm_medium: query.get('utm_medium'),
      utm_term: query.get('utm_term'),
      utm_content: query.get('utm_content'),
    };

    if (publication.integrations?.umamiWebsiteUUID) {
      try {
        await fetch(`${BASE_PATH}/api/collect`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            payload: {
              website: publication.integrations.umamiWebsiteUUID,
              url: window.location.pathname,
              referrer: data.referrer,
              hostname: window.location.hostname,
              language: data.lang,
              screen: `${window.screen.width}x${window.screen.height}`,
            },
            type: 'pageview',
          }),
        });
      } catch (error) {
        console.error('Error sending Umami analytics:', error);
      }
    }

    try {
      await fetch(`${BASE_PATH}/ping/view`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });
    } catch (error) {
      console.error('Error sending view data:', error);
    }
  }, [publication.id, post]);

  return null;
};
