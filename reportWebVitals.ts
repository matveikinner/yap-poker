import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

/**
 * Cumulative Layout Shift
 *
 * Cumulative Layout Shift (CLS) is an important, user-centric metric for measuring visual stability because it helps
 * quantify how often users experience unexpected layout shifts—a low CLS helps ensure that the page is delightful.
 *
 * @see https://web.dev/cls/
 */
getCLS(console.log);

/**
 * First Input Delay
 *
 * First Input Delay (FID) is an important, user-centric metric for measuring load responsiveness because it quantifies
 * the experience users feel when trying to interact with unresponsive pages—a low FID helps ensure that the page is
 * usable.
 *
 * @see https://web.dev/fid/
 */
getFID(console.log);

/**
 * First Contentful Paint
 *
 * First Contentful Paint (FCP) is an important, user-centric metric for measuring perceived load speed because it marks
 * the first point in the page load timeline where the user can see anything on the screen—a fast FCP helps reassure the
 * user that something is happening.
 *
 * @see https://web.dev/fcp/
 */
getFCP(console.log);

/**
 * Largest Contentful Paint
 *
 * Largest Contentful Paint (LCP) is an important, user-centric metric for measuring perceived load speed because it
 * marks the point in the page load timeline when the page's main content has likely loaded—a fast LCP helps reassure
 * the user that the page is useful.
 *
 * @see https://web.dev/lcp/
 */
getLCP(console.log);

/**
 * Time to First Byte
 *
 * Time to First Byte (TTFB) is the time that it takes for a user's browser to receive the first byte of page content
 *
 * @see https://web.dev/time-to-first-byte/
 */
getTTFB(console.log);
