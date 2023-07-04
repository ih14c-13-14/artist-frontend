/**
 * muiのOutlinedInputのlabelを非表示にする場合、本styleも同時に適用する必要がある
 */
const LEGEND_DISPLAY_NONE = {
  '.MuiOutlinedInput-notchedOutline': {
    '&> legend': {
      display: 'none',
    },
  },
};

export default LEGEND_DISPLAY_NONE;
