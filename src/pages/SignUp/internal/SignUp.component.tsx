import { useState } from 'react';

import assertNever from '@/utils/assertNever';

import { PAGE_TYPE } from './SignUp.constants';

const SignUp = () => {
  const [pageType, _setPageType] = useState<
    (typeof PAGE_TYPE)[keyof typeof PAGE_TYPE]
  >(PAGE_TYPE.INPUT);

  switch (pageType) {
    case PAGE_TYPE.INPUT:
      return (
        <div>
          <h1>INPUT</h1>
        </div>
      );
    case PAGE_TYPE.CONFIRM:
      return (
        <div>
          <h1>CONFIRM</h1>
        </div>
      );
    default:
      assertNever(pageType);
  }
};

export default SignUp;
