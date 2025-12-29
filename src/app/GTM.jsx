"use client";
import Script from "next/script";

export default function GTM() {
    return (
        <>
            {/* GTM + GA + Tawk + Meta Pixel with delay */}
            <Script id="tracking-delay" strategy="afterInteractive">
                {`
                    setTimeout(function() {
                        // --- Google Tag Manager ---
                        (function(w,d,s,l,i){
                            w[l]=w[l]||[];
                            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                            var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),
                                dl=l!='dataLayer'?'&l='+l:'';
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

                        // --- Tawk.to ---
                        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                        (function(){
                            var s1=document.createElement("script"),
                                s0=document.getElementsByTagName("script")[0];
                            s1.async=true;
                            s1.src='https://embed.tawk.to/68ff59fcdfa81b194e1d2cf3/1j8inf0tg';
                            s1.charset='UTF-8';
                            s1.setAttribute('crossorigin','*');
                            s0.parentNode.insertBefore(s1,s0);
                        })();

                        // --- Meta Pixel ---
                        !function(f,b,e,v,n,t,s){
                            if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)
                        }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

                        fbq('init', '856673416748882');
                        fbq('track', 'PageView');

                    }, 10000);
                `}
            </Script>

            {/* GTM noscript */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-NRFFWDZL"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </noscript>

            {/* Meta Pixel noscript */}
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=856673416748882&ev=PageView&noscript=1"
                />
            </noscript>
        </>
    );
}
