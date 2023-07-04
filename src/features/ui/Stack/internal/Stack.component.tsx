import { MuiStack } from '@/features/ui/library';

import type { StackProps } from './Stack.types';

const Stack = ({ spacing = 2, children, ...rest }: StackProps) => (
  <MuiStack
    spacing={spacing}
    // NOTE: useFlexGapを有効にすることでmarginの代わりにFlexboxのgapが設定されるようになる
    //       呼び出し元でuseFlexGapの設定を上書きすることができる
    //       Reference: https://zenn.dev/keita_hino/articles/75a8a2296ce26b
    useFlexGap
    {...rest}
  >
    {children}
  </MuiStack>
);

export default Stack;
