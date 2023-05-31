import { render, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button.component';

describe('Button', () => {
  const setup = ({ disabled = false }: { disabled?: boolean }) => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} variant="CONTAINED" disabled={disabled} />
    );
    return { user, onClick };
  };

  it('ボタンクリックしたらonClickで渡したハンドラが動く', async () => {
    const { user, onClick } = setup({});
    await act(() => user.click(screen.getByRole('button')));
    expect(onClick).toBeCalledTimes(1);
  });

  it('disabledがtrueならボタンがクリックできなくなる', async () => {
    const { onClick } = setup({ disabled: true });
    await act(() => userEvent.click(screen.getByRole('button')));
    expect(onClick).not.toBeCalled();
  });
});
