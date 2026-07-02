'use client';

import Script from 'next/script';

const SoroBlogWidget = () => {
  return (
    <div style={{ margin: '2rem 0' }}>
      <div id="soro-blog" />
      <Script
        src="https://app.trysoro.com/api/embed/c6620b58-a5c-4b91-a491-d2568d62210c"
        strategy="afterInteractive"
        onError={() => {
          console.error('Soro embed script failed to load');
        }}
      />
    </div>
  );
};

export default SoroBlogWidget;
