import { ComponentMeta } from '@/utils/storybook';
import { Footer } from './Footer.component';

const FooterStory: ComponentMeta<typeof Footer> = {
  component: Footer,
};

export default FooterStory;

export const FooterDemo = () => {
  return <Footer />;
};
