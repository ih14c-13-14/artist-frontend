/**
 * keyがid, valueがnameのオブジェクトを生成する関数
 */

const mapIdAndName = <
  KEY_ID extends string | number = 'id',
  KEY_NAME extends string = 'name',
  T extends Record<KEY_ID | KEY_NAME, string | number> = Record<
    KEY_ID | KEY_NAME,
    string | number
  >,
>(
  array: ReadonlyArray<T>,
  idFieldName: KEY_ID = 'id' as KEY_ID,
  nameFieldName: KEY_NAME = 'name' as KEY_NAME
) =>
  array.reduce(
    (value, item) => {
      value[item[idFieldName]] = item[nameFieldName];
      return value;
    },
    {} as Record<T[KEY_ID], T[KEY_NAME]>
  );
export default mapIdAndName;
