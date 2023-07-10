import clsx from 'clsx';
import { useMemo, useState } from 'react';

import { Icon } from '@/features/ui/Icon';
import { Stack } from '@/features/ui/Stack';

import styles from './Footer.module.scss';

type FooterSelection = 'Map' | 'Qr' | 'Search';

const FooterIcons = ({
  isSelected,
  setSelected,
  type,
}: {
  isSelected: boolean;
  setSelected: (type: FooterSelection) => void;
  type: FooterSelection;
}) => {
  const title = useMemo(() => {
    switch (type) {
      case 'Map':
        return 'マップ';
      case 'Qr':
        return 'QRリーダ';
      case 'Search':
        return 'さがす';
    }
  }, [type]);
  return (
    <div
      className={styles.buttonContainer}
      onClick={() => {
        setSelected(type);
      }}
    >
      <Stack width="100%" alignItems="center" gap="0">
        <Icon type={type} fill={isSelected ? '#e60010' : '#333'} />
        <p
          className={clsx(
            styles.label,
            isSelected ? styles.selected : undefined
          )}
        >
          {title}
        </p>
      </Stack>
    </div>
  );
};

export const Footer = () => {
  const [selected, setSelected] = useState<FooterSelection>('Map');

  return (
    <Stack direction="row" height="64px" alignItems="center">
      <FooterIcons
        isSelected={selected === 'Map'}
        setSelected={setSelected}
        type="Map"
      />
      <FooterIcons
        isSelected={selected === 'Qr'}
        setSelected={setSelected}
        type="Qr"
      />
      <FooterIcons
        isSelected={selected === 'Search'}
        setSelected={setSelected}
        type="Search"
      />
    </Stack>
  );
};
