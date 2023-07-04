import { MuiCardHeader } from '@/features/ui/library';

import { useCardHeader } from './CardHeader.hooks';
import type { CardHeaderProps } from './CardHeader.types';

const CardHeader = ({
  titleTypographyProps,
  subheaderTypographyProps,
  titleType = 'HEADLINE_2',
  subheaderType = 'TEXT_DESCRIPTION',
  isTruncated = false,
  sx,
  ...rest
}: CardHeaderProps) => {
  const { cardHeaderSxMerged, titleSxMerged, subheaderSxMerged } =
    useCardHeader({
      sx,
      titleType,
      subheaderType,
      isTruncated,
      titleTypographyProps,
      subheaderTypographyProps,
    });

  return (
    <MuiCardHeader
      titleTypographyProps={{ sx: titleSxMerged }}
      subheaderTypographyProps={{ sx: subheaderSxMerged }}
      sx={cardHeaderSxMerged}
      {...rest}
    />
  );
};
export default CardHeader;
