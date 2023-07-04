import { Box } from '@/features/ui/Box';

import type { GoogleMapProps } from './GoogleMap.types';
import { buildSrc } from './buildSrc';

const GoogleMap = ({ q, sx }: GoogleMapProps) => {
  return (
    <Box sx={sx}>
      <iframe
        title={`A map of "${q}"`}
        src={buildSrc({
          q,
          apiKey: import.meta.env.VITE_APP_API_KEY,
          zoom: 15,
        })}
        width="400"
        height="300"
        style={{ border: 0, width: '100%' }}
        allow="fullscreen"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
};
export default GoogleMap;
