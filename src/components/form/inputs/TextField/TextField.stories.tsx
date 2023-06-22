import { Meta, StoryFn } from '@storybook/react';
import { Controller } from 'react-hook-form';

import { useForm } from '@/hooks/useForm';
import validation, { resolver } from '@/utils/validation/validation';

import { TextField } from './TextField.component';

const TextFieldStory: Meta<typeof TextField> = {
  component: TextField,
};

export default TextFieldStory;

const Template: StoryFn<typeof TextField> = args => {
  return <TextField {...args} />;
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined',
  variant: 'outlined',
  disabled: false,
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled',
  variant: 'filled',
  disabled: false,
};

export const Standard = Template.bind({});
Standard.args = {
  label: 'Standard',
  variant: 'standard',
  disabled: false,
};

type FormState = {
  text: string;
};

const schema = validation.object().shape({
  text: validation
    .string()
    .required('Required')
    .equals(['test'], 'Must be test'),
} as const satisfies {
  [key in keyof FormState]: unknown;
});

const Wrapper = ({ defaultValues }: { defaultValues?: Partial<FormState> }) => {
  const {
    register,
    watch,
    formState: { isValid },
  } = useForm<FormState>({
    defaultValues: defaultValues ?? {},
    resolver: resolver(schema),
  });

  return (
    <fieldset>
      <TextField label="storybook" {...register('text')} />
      <br />
      <output>{JSON.stringify(watch('text'))}</output>
      <hr />
      <p>isValid</p>
      <output>{JSON.stringify(isValid)}</output>
    </fieldset>
  );
};

export const ReactHookForm = () => {
  return <Wrapper />;
};

export const ReactHookFormWithDefaultValues = () => {
  return <Wrapper defaultValues={{ text: 'test' }} />;
};

const WrapperWithController = ({
  defaultValues,
}: {
  defaultValues?: Partial<FormState>;
}) => {
  const {
    control,
    watch,
    formState: { isValid },
  } = useForm<FormState>({
    defaultValues: defaultValues ?? {},
    resolver: resolver(schema),
  });

  return (
    <fieldset>
      <Controller
        control={control}
        name="text"
        render={({ field }) => <TextField label="storybook" {...field} />}
      />
      <br />
      <output>{JSON.stringify(watch('text'))}</output>
      <hr />
      <p>isValid</p>
      <output>{JSON.stringify(isValid)}</output>
    </fieldset>
  );
};

export const ReactHookFormWithController = () => {
  return <WrapperWithController />;
};

export const ReactHookFormWithDefaultValuesWithController = () => {
  return <WrapperWithController defaultValues={{ text: 'test' }} />;
};
