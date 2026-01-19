/**
 * Performance Monitoring Utilities
 * Track Core Web Vitals and presentation performance
 */

// Check if Performance API is available
const isPerformanceSupported = typeof window !== 'undefined' && 'performance' in window;

/**
 * Log Core Web Vitals metrics
 * LCP (Largest Contentful Paint): <2.5s target
 * FID (First Input Delay): <100ms target
 * CLS (Cumulative Layout Shift): <0.1 target
 */
export const logWebVitals = () => {
  if (!isPerformanceSupported) return;

  // Largest Contentful Paint
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('[Performance] LCP:', lastEntry.startTime.toFixed(0), 'ms');
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      // LCP not supported
    }

    // First Input Delay
    try {
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          console.log('[Performance] FID:', entry.processingStart - entry.startTime, 'ms');
        });
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (e) {
      // FID not supported
    }

    // Cumulative Layout Shift
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('[Performance] CLS:', clsValue.toFixed(3));
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      // CLS not supported
    }
  }
};

/**
 * Measure page load time
 */
export const measureLoadTime = () => {
  if (!isPerformanceSupported) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      const timing = performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;
      const firstPaint = performance.getEntriesByType('paint')[0]?.startTime || 0;

      console.log('[Performance] Page Load Metrics:');
      console.log('  - First Paint:', firstPaint.toFixed(0), 'ms');
      console.log('  - DOM Ready:', domReady, 'ms');
      console.log('  - Full Load:', loadTime, 'ms');
    }, 0);
  });
};

/**
 * Track slide change performance
 */
export const trackSlideChange = (slideIndex, startTime) => {
  if (!isPerformanceSupported) return;

  const endTime = performance.now();
  const duration = endTime - startTime;

  if (duration > 100) {
    console.warn(`[Performance] Slow slide transition to slide ${slideIndex}: ${duration.toFixed(0)}ms`);
  }
};

/**
 * Get bundle size estimate from loaded resources
 */
export const estimateBundleSize = () => {
  if (!isPerformanceSupported) return;

  const resources = performance.getEntriesByType('resource');
  const jsSize = resources
    .filter(r => r.name.endsWith('.js'))
    .reduce((sum, r) => sum + (r.transferSize || 0), 0);
  const cssSize = resources
    .filter(r => r.name.endsWith('.css'))
    .reduce((sum, r) => sum + (r.transferSize || 0), 0);
  const imgSize = resources
    .filter(r => /\.(png|jpg|jpeg|webp|gif|svg)$/.test(r.name))
    .reduce((sum, r) => sum + (r.transferSize || 0), 0);

  console.log('[Performance] Bundle Size Estimate:');
  console.log('  - JavaScript:', (jsSize / 1024).toFixed(1), 'KB');
  console.log('  - CSS:', (cssSize / 1024).toFixed(1), 'KB');
  console.log('  - Images:', (imgSize / 1024).toFixed(1), 'KB');
  console.log('  - Total:', ((jsSize + cssSize + imgSize) / 1024).toFixed(1), 'KB');

  return { jsSize, cssSize, imgSize, total: jsSize + cssSize + imgSize };
};

/**
 * Initialize all performance monitoring (call once on app load)
 */
export const initPerformanceMonitoring = () => {
  if (process.env.NODE_ENV === 'development') {
    logWebVitals();
    measureLoadTime();

    // Log bundle size after page fully loads
    window.addEventListener('load', () => {
      setTimeout(estimateBundleSize, 1000);
    });
  }
};

/**
 * Create a performance mark for custom timing
 */
export const mark = (name) => {
  if (isPerformanceSupported) {
    performance.mark(name);
  }
};

/**
 * Measure between two marks
 */
export const measure = (name, startMark, endMark) => {
  if (isPerformanceSupported) {
    try {
      performance.measure(name, startMark, endMark);
      const measures = performance.getEntriesByName(name, 'measure');
      const duration = measures[measures.length - 1]?.duration || 0;
      console.log(`[Performance] ${name}: ${duration.toFixed(0)}ms`);
      return duration;
    } catch (e) {
      return 0;
    }
  }
  return 0;
};

export default {
  logWebVitals,
  measureLoadTime,
  trackSlideChange,
  estimateBundleSize,
  initPerformanceMonitoring,
  mark,
  measure,
};
