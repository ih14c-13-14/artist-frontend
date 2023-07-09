import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

import { useForm } from '@/hooks/useForm';
import validation, { resolver } from '@/utils/validation/validation';

import RadioGroup from './RadioGroup.component';

const RadioGroupStory: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

export default RadioGroupStory;

export const Normal: StoryFn<typeof RadioGroup> = args => {
  const [checked, setChecked] = useState('');

  return (
    <fieldset>
      <RadioGroup
        {...args}
        value={checked}
        onChange={setChecked}
        choices={[
          { id: 'foo', name: 'label foo' },
          { id: 'bar', name: 'label bar' },
          { id: 'baz', name: 'label baz' },
        ]}
      />
      <br />
      <output>{JSON.stringify(checked)}</output>
    </fieldset>
  );
};
Normal.args = {
  disabled: false,
};

export const TooManyChoices: StoryFn<typeof RadioGroup> = args => {
  const [checked, setChecked] = useState('');

  return (
    <fieldset>
      <RadioGroup
        {...args}
        value={checked}
        onChange={setChecked}
        choices={[
          { id: 'foo', name: 'label foo' },
          { id: 'bar', name: 'label bar' },
          { id: 'baz', name: 'label baz' },
          { id: 'qux', name: 'label qux' },
          { id: 'quux', name: 'label quux' },
          { id: 'corge', name: 'label corge' },
          { id: 'grault', name: 'label grault' },
          { id: 'garply', name: 'label garply' },
          { id: 'waldo', name: 'label waldo' },
          { id: 'fred', name: 'label fred' },
          { id: 'plugh', name: 'label plugh' },
          { id: 'xyzzy', name: 'label xyzzy' },
          { id: 'thud', name: 'label thud' },
        ]}
      />
      <br />
      <output>{JSON.stringify(checked)}</output>
    </fieldset>
  );
};
TooManyChoices.args = {
  disabled: false,
};

export const Boolean = () => {
  const [checked, setChecked] = useState(false);

  return (
    <fieldset>
      <RadioGroup
        value={checked}
        onChange={setChecked}
        choices={[
          { id: true, name: 'label true' },
          { id: false, name: 'label false' },
        ]}
      />
      <br />
      <output>{JSON.stringify(checked)}</output>
    </fieldset>
  );
};

const schema = validation.object().shape({
  // foo以外を選んだエラー
  checked: validation.string().oneOf(['foo'], 'foo以外を選んだエラー'),
});

export const ReactHookForm = () => {
  type FormState = {
    checked: string;
  };
  const { control, watch, formState } = useForm<FormState>({
    defaultValues: {},
    resolver: resolver(schema),
  });

  const { errors, isValid } = formState;
  return (
    <fieldset>
      <Controller
        control={control}
        name="checked"
        render={({ field }) => (
          <RadioGroup
            {...field}
            choices={[
              { id: 'foo', name: 'label foo' },
              { id: 'bar', name: 'label bar' },
              { id: 'baz', name: 'label baz' },
            ]}
          />
        )}
      />
      <br />
      <output>{JSON.stringify(watch('checked'))}</output>
      <hr />
      <p>isValid</p>
      <output>{JSON.stringify(isValid)}</output>
      <hr />
      <p>errors</p>
      <output>{JSON.stringify(errors)}</output>
    </fieldset>
  );
};
