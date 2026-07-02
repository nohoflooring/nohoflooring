'use client';

import { useEffect } from 'react';

const SoroBlogWidget = () => {
  useEffect(() => {
    const container = document.getElementById('soro-blog');
    if (!container) return;

    const existingScript = document.querySelector('script[src*="trysoro.com/api/embed"]');
    if (existingScript) return;

    const script = document.createElement('script');
    script.src = 'https://app.trysoro.com/api/embed/c6620b58-a5c-4b91-a491-d2568d62210c';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="soro-blog" style={{ margin: '2rem 0' }} />;
};

export default SoroBlogWidget;
