import { FooterType } from '../../types';

export type FooterIconsProps = {
  type: FooterType;
  isSelected: boolean;
  onClick: () => void;
};
