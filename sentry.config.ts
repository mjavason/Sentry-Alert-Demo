import Sentry from '@sentry/node';

// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   sendDefaultPii: true,
//   tracesSampleRate: 1.0,
// });

Sentry.init({
  dsn: 'https://6395f4ae18857cbfa475190e06ad1df4@o4505816031428608.ingest.us.sentry.io/4509933537263616',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
