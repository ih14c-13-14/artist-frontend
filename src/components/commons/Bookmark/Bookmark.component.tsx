import { TurnedIn, TurnedInNot } from '@mui/icons-material';
import { Button as MuiButton } from '@mui/material';
import { useState } from 'react';

import { BookmarkProps } from './Bookmark.type';

export const Bookmark = ({
  isAlradyBookmarked = false,
  variant = 'text',
  disabled,
  color = 'inherit',
  ...rest
}: BookmarkProps) => {
  const [isBookmarked, setIsBookmarked] = useState(isAlradyBookmarked);

  const handleToggleBookmark = () => {
    // TODO api
    // 表示を変えるだけなので実際の処理はこれから
    setIsBookmarked(!isBookmarked);
  };

  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      color={color}
      onClick={handleToggleBookmark}
      {...rest}
    >
      {isBookmarked ? <TurnedIn /> : <TurnedInNot />}
    </MuiButton>
  );
};
