export const generateEllipsisMarkSx = (isTruncated?: boolean) =>
  isTruncated
    ? {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }
    : {};
