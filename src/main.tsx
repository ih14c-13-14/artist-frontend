import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@google/model-viewer'; // eslint-disable-line @typescript-eslint/no-restricted-imports
import App from './App';
import 'ress/ress.css';

void (async () => {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('./mocks/browser');
    await worker.start({
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    });
  }

  const container = document.getElementById('root');
  if (!container) {
    return;
  }
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
})();
