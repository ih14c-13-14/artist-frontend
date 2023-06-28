import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@google/model-viewer'; // eslint-disable-line @typescript-eslint/no-restricted-imports
import App from './App';
import 'ress/ress.css';

void (async () => {
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
