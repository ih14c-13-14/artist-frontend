import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Controller } from 'react-hook-form';

import { useForm } from '@/hooks/useForm';
import validation, { resolver } from '@/utils/validation/validation';

import RadioGroup from './RadioGroup.component';

const TestingRadioGroup = ({
  schema,
  handleOnChange,
}: {
  schema: validation.ObjectSchema<{}>;
  handleOnChange?: (value: string) => void;
}) => {
  type FormState = {
    radio: string;
  };
  const { control, watch, formState } = useForm<FormState>({
    defaultValues: {},
    resolver: resolver(schema),
  });
  const { errors, isValid } = formState;

  return (
    <>
      <Controller
        control={control}
        name="radio"
        render={({ field }) => (
          <RadioGroup
            {...field}
            onChange={e => {
              field.onChange(e);
              handleOnChange?.(e);
            }}
            choices={[
              { id: 'foo', name: 'label foo' },
              { id: 'bar', name: 'label bar' },
              { id: 'baz', name: 'label baz' },
            ]}
          />
        )}
      />
      <output data-testid="value">{JSON.stringify(watch('radio'))}</output>
      <output data-testid="isValid">{JSON.stringify(isValid)}</output>
      <output data-testid="errors">{JSON.stringify(errors)}</output>
    </>
  );
};

describe('RadioGroup', () => {
  describe('useForm既定のタイミングでバリデートできる', async () => {
    const setup = () => {
      const validationErrorMessage = 'foo以外を選んでエラー';
      const schema = validation.object().shape({
        radio: validation.string().oneOf(['foo'], validationErrorMessage),
      });

      const user = userEvent.setup();

      const utils = render(<TestingRadioGroup schema={schema} />);
      return { utils, user, validationErrorMessage };
    };

    it('最初にバリデーションスキーマに適合する選択をして、バリデーション通過する', async () => {
      const { user } = setup();
      const radio = screen.getByRole('radio', { name: 'label foo' });
      const value = screen.getByTestId('value');
      const isValid = screen.getByTestId('isValid');
      const errors = screen.getByTestId('errors');
      await act(() => user.click(radio));

      expect(value).toHaveTextContent(JSON.stringify('foo'));
      expect(isValid).toHaveTextContent(JSON.stringify(true));
      expect(errors).toHaveTextContent(JSON.stringify({}));
    });

    it('最初にバリデーションスキーマに適合しない選択をして、バリデーションエラーになる', async () => {
      const { user, validationErrorMessage } = setup();
      const radio = screen.getByRole('radio', { name: 'label bar' });
      const value = screen.getByTestId('value');
      const isValid = screen.getByTestId('isValid');
      const errors = screen.getByTestId('errors');
      await act(() => user.click(radio));

      expect(value).toHaveTextContent(JSON.stringify('bar'));
      expect(isValid).toHaveTextContent(JSON.stringify(false));
      expect(errors).toHaveTextContent(
        JSON.stringify({
          radio: { message: validationErrorMessage, type: 'oneOf', ref: {} },
        })
      );
    });

    it('バリデーションスキーマに適合する選択した後に、適合しないものを選んで、バリデーションエラーになる', async () => {
      const { user, validationErrorMessage } = setup();
      const radioFoo = screen.getByRole('radio', { name: 'label foo' });
      const radioBar = screen.getByRole('radio', { name: 'label bar' });
      const value = screen.getByTestId('value');
      const isValid = screen.getByTestId('isValid');
      const errors = screen.getByTestId('errors');
      await act(() => user.click(radioFoo));
      await act(() => user.click(radioBar));

      expect(value).toHaveTextContent(JSON.stringify('bar'));
      expect(isValid).toHaveTextContent(JSON.stringify(false));
      expect(errors).toHaveTextContent(
        JSON.stringify({
          radio: { message: validationErrorMessage, type: 'oneOf', ref: {} },
        })
      );
    });

    it('バリデーションスキーマに適合しない選択した後に、適合しないものを選んで、バリデーション通過する', async () => {
      const { user, validationErrorMessage } = setup();
      const radioFoo = screen.getByRole('radio', { name: 'label foo' });
      const radioBar = screen.getByRole('radio', { name: 'label bar' });
      const value = screen.getByTestId('value');
      const isValid = screen.getByTestId('isValid');
      const errors = screen.getByTestId('errors');
      await act(() => user.click(radioBar));

      expect(value).toHaveTextContent(JSON.stringify('bar'));
      expect(isValid).toHaveTextContent(JSON.stringify(false));
      expect(errors).toHaveTextContent(
        JSON.stringify({
          radio: { message: validationErrorMessage, type: 'oneOf', ref: {} },
        })
      );

      await act(() => user.click(radioFoo));

      expect(value).toHaveTextContent(JSON.stringify('foo'));
      expect(isValid).toHaveTextContent(JSON.stringify(true));
      expect(errors).toHaveTextContent(JSON.stringify({}));
    });
  });

  it('propで渡したhandleOnChangeが呼ばれる', async () => {
    const handleOnChange = vi.fn();
    const schema = validation.object().shape({});
    render(
      <TestingRadioGroup schema={schema} handleOnChange={handleOnChange} />
    );
    const user = userEvent.setup();
    const radio = screen.getByRole('radio', { name: 'label foo' });
    await act(() => user.click(radio));
    expect(handleOnChange).toHaveBeenCalledWith('foo');
  });
});
