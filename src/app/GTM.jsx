"use client";
import Script from "next/script";

export default function GTM() {
    return (
        <>
            <Script id="gtm-ga-delay" strategy="afterInteractive">
                {`
                    setTimeout(function() {
                        // --- Google Tag Manager ---
                        (function(w,d,s,l,i){
                            w[l]=w[l]||[];
                            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                            var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                            j.async=true;
                            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                            f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-NRFFWDZL');

                        // --- Google Analytics ---
                        var gtagScript = document.createElement('script');
                        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-3ZPMNEJ9DJ';
                        gtagScript.async = true;
                        document.head.appendChild(gtagScript);

                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-3ZPMNEJ9DJ');
                    }, 10000);
                `}
            </Script>

            {/* Google Tag Manager (noscript fallback) */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-NRFFWDZL"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>
        </>
    );
}
