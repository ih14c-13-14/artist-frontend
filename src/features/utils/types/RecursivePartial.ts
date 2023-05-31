type RecursivePartial<T> = T extends ReadonlyArray<infer U>
  ? ReadonlyArray<RecursivePartial<U>>
  : T extends object
  ? {
      [P in keyof T]?: RecursivePartial<T[P]>;
    }
  : T;

export default RecursivePartial;
