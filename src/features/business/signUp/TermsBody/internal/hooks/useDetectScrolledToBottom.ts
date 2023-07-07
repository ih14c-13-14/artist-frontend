import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  setIsScrolledToBottom: (isScrolledToBottom: boolean) => void;
};

// NOTE: 最下部より少し上までスクロールした場合に、スクロールを完了したとみなす
const SCROLL_THRESHOLD = 10;

export const useDetectScrolledToBottom = ({ setIsScrolledToBottom }: Props) => {
  const [isAlreadyScrolledToBottom, setIsAlreadyScrolledToBottom] =
    useState(false);

  const { ref: inViewRef, inView } = useInView({
    rootMargin: `-${SCROLL_THRESHOLD}px 0px 0px 0px`,
  });

  useEffect(() => {
    if (!inView || isAlreadyScrolledToBottom) return;
    setIsScrolledToBottom(true);
    setIsAlreadyScrolledToBottom(true);
  }, [inView, isAlreadyScrolledToBottom, setIsScrolledToBottom]);

  return {
    inViewRef,
  };
};
