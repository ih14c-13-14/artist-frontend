import type { ListContainerProps } from './ListContainer.types';

const useListContainer = ({
  width,
  height,
}: Omit<ListContainerProps, 'children'>) => {
  const BOX_SX = {
    backgroundColor: '#FAFBFC',
    width: width ?? 'auto',
    height: height ?? 'auto',
    maxHeight: '100%',
    overflowY: 'auto',
  };

  return {
    BOX_SX,
  } as const;
};

export default useListContainer;
