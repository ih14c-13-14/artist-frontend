import type { CustomStringSchema } from '@/utils/validation/customMethod/string/string';

declare module 'yup' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface StringSchema extends CustomStringSchema {}
}
