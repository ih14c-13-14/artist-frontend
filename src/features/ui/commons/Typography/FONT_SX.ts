import type { SxProps, Theme } from '@/features/ui/library';

import type { TypographyVariant } from './TypographyVariant.types';

export const FONT_SX: Record<TypographyVariant, SxProps<Theme>> = {
  HEADLINE_1: { fontSize: '24px', fontWeight: 700, lineHeight: '36px' },
  HEADLINE_2: { fontSize: '18px', fontWeight: 700, lineHeight: '27px' },
  HEADLINE_3: { fontSize: '16px', fontWeight: 700, lineHeight: '24px' },
  HEADLINE_4: { fontSize: '14px', fontWeight: 700, lineHeight: '21px' },
  BODY_1: { fontSize: '14px', fontWeight: 500, lineHeight: '28px' },
  BUTTON_LARGE: { fontSize: '16px', fontWeight: 700, lineHeight: '24px' },
  BUTTON_MEDIUM: { fontSize: '14px', fontWeight: 700, lineHeight: '16px' },
  BUTTON_SMALL: { fontSize: '12px', fontWeight: 700, lineHeight: '16px' },
  CAPTION: { fontSize: '10px', fontWeight: 400, lineHeight: '14px' },
  FORM_TEXT: { fontSize: '14px', fontWeight: 400 },
  FORM_TEXT_BOLD: { fontSize: '14px', fontWeight: 700 },
  TEXT_DESCRIPTION: { fontSize: '12px', fontWeight: 500 },
  TEXT_TITLE: { fontSize: '12px', fontWeight: 400 },
  LABEL: { fontSize: '12px', fontWeight: 700 },
};
