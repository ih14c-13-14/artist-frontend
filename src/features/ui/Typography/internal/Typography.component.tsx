import { MuiTypography } from '@/features/ui/library';

import useTypography from './Typography.hooks';
import type { TypographyProps } from './Typography.types';

const Typography = ({
  sx,
  type = 'BODY_1',
  isTruncated = false,
  component = 'span',
  ...rest
}: TypographyProps) => {
  const { sxMerged } = useTypography({ sx, type, isTruncated });

  return <MuiTypography component={component} sx={sxMerged} {...rest} />;
};

export default Typography;
