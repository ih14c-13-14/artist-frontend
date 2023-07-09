import type { CSSObjectWithLabel } from 'react-select';

/**
 * SelectInputとSelectMultiInputで共通のスタイルを定義する
 * control以外にheightを当てると枠線からはみ出るので注意
 */
export const selectInputCommonStyles = {
  container: (styles: CSSObjectWithLabel) => {
    return {
      ...styles,
      padding: 0,
      margin: 0,
      width: '100%',
    };
  },
  indicatorsContainer: (styles: CSSObjectWithLabel) => {
    return {
      ...styles,
      padding: 0,
      margin: 0,
    };
  },
  dropdownIndicator: (styles: CSSObjectWithLabel) => {
    return {
      ...styles,
      padding: 10,
      margin: 0,
    };
  },
  placeholder: (styles: CSSObjectWithLabel) => {
    return {
      ...styles,
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '14px',
      color: '#666667',
    };
  },
  valueContainer: (styles: CSSObjectWithLabel) => {
    return {
      ...styles,
      padding: '0 0 0 14px',
      margin: 0,
    };
  },
  control: (
    styles: CSSObjectWithLabel,
    {
      isDisabled = false,
      minHeight = '54px',
    }: { isDisabled: boolean; minHeight?: CSSObjectWithLabel['height'] }
  ) => {
    return {
      ...styles,
      padding: 0,
      margin: 0,
      // NOTE: heightが効かないので0pxに調整
      minHeight,
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      boxSizing: 'border-box',
      alignItems: 'center',
      background: isDisabled ? '#E4E5E6' : '#f4f6f8',

      // HACK: Input共通で用いるスタイリングをこちらにも適用したいが、ライブラリデフォルトのスタイルがあるため、こちらを無効化する措置をとる
      borderRadius: '4px',
      borderColor: undefined,
      borderStyle: undefined,
      borderWidth: undefined,
      boxShadow: undefined,
      '&:hover': undefined,
    };
  },
  input: (styles: CSSObjectWithLabel) => {
    return {
      ...styles,
      padding: '8px 0',
      margin: 0,
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '14px',
      color: '#666667',
    };
  },
  menu: (styles: CSSObjectWithLabel) => {
    return {
      ...styles,
      borderRadius: '4px',
      boxShadow: '0 0 16px rgb(32 34 55 / 8%)',
    };
  },
  option: (
    styles: CSSObjectWithLabel,
    {
      isFocused = false,
      isSelected = false,
    }: { isFocused: boolean; isSelected?: boolean }
  ) => {
    return {
      ...styles,
      padding: '8px 15px',
      height: '31px',
      top: '16px',
      display: 'flex',
      alignItems: 'center',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '12px',
      color: isSelected ? '#202237' : '#464748',
      background:
        // NOTE: selectedのbackgroundを優先する
        !isSelected && isFocused
          ? '#ffffff'
          : isSelected
          ? '#f7f7f7'
          : '#ffffff',
      ':hover': {
        background: '#f7f7f7',
      },
    };
  },
} satisfies {
  [key: string]: (
    styles: CSSObjectWithLabel,
    options: {
      isDisabled: boolean;
      isFocused: boolean;
      isSelected: boolean;
      height: CSSObjectWithLabel['height'];
    }
  ) => CSSObjectWithLabel;
};
