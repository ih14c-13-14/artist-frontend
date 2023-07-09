import type { DropdownIndicatorProps } from 'react-select';
import Select, { components } from 'react-select';

import {
  selectInputCommonStyles,
  SELECT_INPUT_DEFAULT_DISPLAY_LABELS,
} from '@/features/form/inputs/commons/SelectInput';
import { Icon } from '@/features/ui/Icon';

import useHooks from './SelectInput.hooks';
import type { SelectInputProps } from './SelectInput.types';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const DropdownIndicator = <TValue extends unknown = string>(
  props: DropdownIndicatorProps<TValue, false>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon type="ChevronDown" size={16} style={{ color: '#464748' }} />
    </components.DropdownIndicator>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const SelectInput = <TValue extends unknown = string>({
  width = '100%',
  minHeight = '54px',
  selectedValuePaddingLeft = '0px',
  disabled,
  label = SELECT_INPUT_DEFAULT_DISPLAY_LABELS.EMPTY,
  dataTestid,
  ...rest
}: SelectInputProps<TValue>) => {
  const { options, currentOption, handleSelect } = useHooks({ width, ...rest });

  const {
    container: selectContainerStyle,
    indicatorsContainer: selectIndicatorsContainerStyle,
    dropdownIndicator: selectDropdownIndicatorStyle,
    placeholder: selectPlaceholderStyle,
    valueContainer: selectValueContainerStyle,
    control: selectControlStyle,
    input: selectInputStyle,
    menu: selectMenuStyle,
    option: selectOptionStyle,
  } = selectInputCommonStyles;

  return (
    <div style={{ width, padding: 0 }} data-testid={dataTestid}>
      <Select
        options={options}
        name={rest.name}
        onChange={selectedOption => handleSelect(selectedOption)}
        onBlur={() => {
          rest.onBlur && rest.onBlur();
        }}
        value={currentOption}
        noOptionsMessage={() => SELECT_INPUT_DEFAULT_DISPLAY_LABELS.NO_OPTIONS}
        components={{
          DropdownIndicator,
          IndicatorSeparator: null,
        }}
        isDisabled={disabled}
        placeholder={label}
        // NOTE: control以外にprops.heightを当てると枠線からはみ出るので注意
        styles={{
          container: base => ({
            ...selectContainerStyle(base),
          }),
          indicatorsContainer: base => ({
            ...selectIndicatorsContainerStyle(base),
          }),
          dropdownIndicator: base => ({
            ...selectDropdownIndicatorStyle(base),
          }),
          placeholder: base => ({
            ...selectPlaceholderStyle(base),
          }),
          valueContainer: base => ({
            ...selectValueContainerStyle(base),
          }),
          control: (styles, { isDisabled }) => ({
            ...selectControlStyle(styles, { isDisabled, minHeight }),
          }),
          input: base => ({
            ...selectInputStyle(base),
          }),
          singleValue: base => ({
            ...base,
            marginLeft: undefined,
            marginRight: undefined,
            padding: `8px 0 8px ${selectedValuePaddingLeft}`,
            margin: 0,
            height: '1px',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '1px',
            color: '#666667',
          }),
          menu: base => ({
            ...selectMenuStyle(base),
          }),
          option: (styles, { isFocused, isSelected }) => ({
            ...selectOptionStyle(styles, { isFocused, isSelected }),
          }),
          menuList: base => ({
            ...base,
            padding: '16px 0',
          }),
        }}
      />
    </div>
  );
};

export default SelectInput;
