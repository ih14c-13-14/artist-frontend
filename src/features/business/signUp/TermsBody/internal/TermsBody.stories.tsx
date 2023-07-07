import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { Checkbox } from '@/features/form/inputs/Checkbox';
import { Spacer } from '@/features/ui/Spacer';

import TermsBody from './TermsBody.component';

const TermsBodyStory: Meta<typeof TermsBody> = {
  component: TermsBody,
};

export default TermsBodyStory;

export const Default = () => {
  const [isTermsScrolled, setIsTermsScrolled] = useState(false);
  return (
    <>
      <TermsBody setIsTermsScrolled={setIsTermsScrolled} />
      <Spacer size="16px" />
      <Checkbox
        disabled={!isTermsScrolled}
        choiceLabel="次回から自動ログインにする"
      />
    </>
  );
};
