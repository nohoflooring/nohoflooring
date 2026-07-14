'use client';

import { useEffect } from 'react';

const SoroBlog = () => {
  useEffect(() => {
    // Only inject script if it hasn't been added yet
    const existingScript = document.querySelector(
      'script[src="https://app.trysoro.com/api/embed/c6620b58-8a5c-4b91-a491-d2568d62210c"]'
    );
    if (!existingScript) {
      const script = document.createElement('script');
      script.src =
        'https://app.trysoro.com/api/embed/c6620b58-8a5c-4b91-a491-d2568d62210c';
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return <div id="soro-blog"></div>;
};

export default SoroBlog;
