import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PreLoader from '@/components/common/PreLoader'
import BackToTop from '@/components/common/BackToTop'
import CustomCursor from '@/components/common/CustomCursor'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'SaasLyn - AI-Powered Digital Solutions',
  description: 'Build Smarter. Scale Faster. With AI-Powered Digital Solutions',
  icons: {
    icon: '/assets/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ── CSS ── exact same order as index-4.html ─────────────── */}
        <link rel="stylesheet" href="/assets/css/new-css-v2/plugins.css" />
        <link rel="stylesheet" href="/assets/css/new-css-v2/style.css" />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <CustomCursor />
        <PreLoader />
        <BackToTop />

        <div className="site-wrapper">
          <Header />
          {children}
          <Footer />
        </div>

        {/* ── JS ── exact same order as index-4.html ──────────────── */}
        <Script src="/assets/js/new-js-v2/jquery-3.7.1.min.js"            strategy="beforeInteractive" />
        <Script src="/assets/js/new-js-v2/bootstrap.bundle.min.js"        strategy="beforeInteractive" />
        <Script src="/assets/js/new-js-v2/jquery.mixitup.min.js"          strategy="beforeInteractive" />
        <Script src="/assets/js/new-js-v2/swiper-bundle.min.js"           strategy="beforeInteractive" />
        <Script src="/assets/js/new-js-v2/jquery.magnific-popup.min.js"   strategy="beforeInteractive" />
        <Script src="/assets/js/new-js-v2/odometer.min.js"                strategy="beforeInteractive" />
        <Script src="/assets/js/new-js-v2/viewport.jquery.js"             strategy="beforeInteractive" />
        <Script src="/assets/js/new-js-v2/jquery.meanmenu.min.js"         strategy="beforeInteractive" />
        <Script src="/assets/js/new-js-v2/YouTubePopUp.js"                strategy="beforeInteractive" />
        <Script src="/assets/js/new-js-v2/select2.js"                     strategy="beforeInteractive" />
        <Script src="/assets/js/new-js-v2/gsap.min.js"                    strategy="beforeInteractive" />
        <Script src="/assets/js/new-js-v2/main.js"                        strategy="afterInteractive" />

        {/* ── Preloader fix (jQuery's fadeOut in main.js handles it,
               but as a fallback we also force-hide after 2 s) ─────── */}
        <Script id="preloader-fallback" strategy="afterInteractive">{`
          (function () {
            function hidePreloader() {
              var el = document.querySelector('.preloader');
              if (el) {
                el.style.transition = 'opacity 0.6s';
                el.style.opacity   = '0';
                setTimeout(function () { el.style.display = 'none'; }, 650);
              }
            }
            if (document.readyState === 'complete') {
              setTimeout(hidePreloader, 800);
            } else {
              window.addEventListener('load', function () {
                setTimeout(hidePreloader, 800);
              });
            }
          })();
        `}</Script>
      </body>
    </html>
  )
}
