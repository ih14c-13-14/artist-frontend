import clsx from 'clsx';

import styles from './GoogleMap.module.scss';
import type { GoogleMapProps } from './GoogleMap.types';
import { buildSrc } from './buildSrc';

const GoogleMap = ({ q, className }: GoogleMapProps) => {
  const containerClassName = clsx(styles.container, className);

  return (
    <div className={containerClassName}>
      <iframe
        title={`A map of "${q}"`}
        src={buildSrc({
          q,
          apiKey: import.meta.env.VITE_MAPS_API_KEY,
          zoom: 15,
        })}
        style={{ border: 0, width: '100%' }}
        allow="fullscreen"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
export default GoogleMap;
