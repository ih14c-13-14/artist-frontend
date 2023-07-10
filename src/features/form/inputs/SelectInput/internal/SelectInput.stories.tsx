import { Meta } from '@storybook/react';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

import { useForm } from '@/hooks/useForm';
import validation, { resolver } from '@/utils/validation/validation';

import SelectInput from './SelectInput.component';

const SelectInputStory: Meta<typeof SelectInput> = {
  component: SelectInput,
};

export default SelectInputStory;

type ChoiceNumberID = 1 | 2 | 3;
type ChoiceBooleanID = true | false;
type ChoiceID = 'hoge' | 'fuga' | 'piyo';

export const Controlled = () => {
  const [selected, setSelected] = useState<ChoiceNumberID>(1);

  return (
    <fieldset>
      <SelectInput<ChoiceNumberID>
        value={selected}
        onChange={value => setSelected(value as ChoiceNumberID)}
        choices={[
          { id: 1, name: 'label foo' },
          { id: 2, name: 'label bar' },
          { id: 3, name: 'label baz' },
        ]}
      />
      <br />
      <output>{JSON.stringify(selected)}</output>
    </fieldset>
  );
};

export const Uncontrolled = () => {
  return (
    <SelectInput<ChoiceBooleanID>
      defaultValue={false}
      choices={[
        { id: true, name: 'label foo' },
        { id: false, name: 'label bar' },
      ]}
    />
  );
};

export const Disabled = () => {
  return (
    <SelectInput<ChoiceBooleanID>
      defaultValue={false}
      choices={[
        { id: true, name: 'label foo' },
        { id: false, name: 'label bar' },
      ]}
      minHeight="36px"
      disabled
    />
  );
};

const schema = validation.object().shape({
  select: validation.string().required('Required'),
});
export const ReactHookForm = () => {
  const { control, watch } = useForm<{ select: ChoiceID }>({
    defaultValues: {
      select: 'piyo',
    },
    resolver: resolver(schema),
  });
  const value = watch('select');

  // NOTE: UIライブラリを利用する場合はControllerで囲う必要あり
  // NOTE: https://react-hook-form.com/get-started
  return (
    <fieldset>
      <Controller
        name="select"
        control={control}
        render={({ field }) => (
          <SelectInput<ChoiceID>
            {...field}
            choices={[
              { id: 'hoge', name: 'ほげ' },
              { id: 'fuga', name: 'ふが' },
              {
                id: 'piyo',
                name: 'ぴよ',
              },
            ]}
          />
        )}
      />
      <output>{JSON.stringify(value)}</output>
    </fieldset>
  );
};
