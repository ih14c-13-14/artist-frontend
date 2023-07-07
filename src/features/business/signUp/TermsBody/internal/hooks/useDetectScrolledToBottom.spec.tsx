import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import { useDetectScrolledToBottom } from './useDetectScrolledToBottom';

const setIsScrolledToBottom = vi.fn();

global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: () => vi.fn(),
  unobserve: () => vi.fn(),
  disconnect: () => vi.fn(),
}));

const Component = () => {
  const { inViewRef } = useDetectScrolledToBottom({
    setIsScrolledToBottom,
  });

  return (
    <div data-testid="container">
      <div data-testid="messageBody" style={{ height: '1000px' }} />
      <div data-testid="bottomElement" ref={inViewRef} />
    </div>
  );
};

describe('useDetectScrolledToBottom', () => {
  const setup = () => {
    const user = userEvent.setup();
    render(<Component />);

    return {
      user,
    };
  };

  it('最下部に到達するとsetIsScrolledToBottomが呼ばれる', async () => {
    setup();
    mockAllIsIntersecting(true);
    expect(setIsScrolledToBottom).toBeCalled();
  });
});
