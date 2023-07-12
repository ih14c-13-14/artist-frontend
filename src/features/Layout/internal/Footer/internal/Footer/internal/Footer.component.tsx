import { Stack } from '@/features/ui/Stack';

import { useFooter } from './Footer.hooks';
import { FooterIcon } from '../../FooterIcons';

const Footer = () => {
  const { selected, onMapClick, onQrClick, onSearchClick } = useFooter();
  return (
    <Stack direction="row" height="64px" alignItems="center">
      <FooterIcon type="Map" isSelected={selected.map} onClick={onMapClick} />
      <FooterIcon type="Qr" isSelected={selected.qr} onClick={onQrClick} />
      <FooterIcon
        type="Search"
        isSelected={selected.search}
        onClick={onSearchClick}
      />
    </Stack>
  );
};

export default Footer;
