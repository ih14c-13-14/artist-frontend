import { render, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button.component';

describe('Button', () => {
  const setup = ({ disabled = false }: { disabled?: boolean }) => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button
        label="test"
        onClick={onClick}
        variant="contained"
        disabled={disabled}
      />
    );
    return { user, onClick };
  };

  it('ボタンクリックしたらonClickで渡したハンドラが動く', async () => {
    const { user, onClick } = setup({});
    await act(() => user.click(screen.getByRole('button')));
    expect(onClick).toBeCalledTimes(1);
  });

  it('disabledがtrueならボタンがpointer-events: noneになる', () => {
    setup({ disabled: true });
    const button = screen.getByRole('button');

    // ボタンがdisabled状態であることを確認
    expect(button).toBeDisabled();

    // ボタンのスタイルがpointer-events: noneであることを確認
    expect(window.getComputedStyle(button).pointerEvents).toBe('none');
  });
});
