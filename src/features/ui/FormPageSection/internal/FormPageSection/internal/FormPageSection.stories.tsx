import { ComponentMeta, Skeleton, StoryFn } from '@/utils/storybook';

import FormPageSection from './FormPageSection.component';

const FormPageSectionStory: ComponentMeta<typeof FormPageSection> = {
  component: FormPageSection,
  args: {
    type: 'h1',
    title: 'h1-section',
    children: (
      <Skeleton type="div" style={{ height: '100px' }}>
        children-block-content
      </Skeleton>
    ),
  },
};

export default FormPageSectionStory;

const Template: StoryFn<typeof FormPageSection> = args => (
  <FormPageSection {...args} />
);

export const TypeH1 = Template.bind({});

export const TypeH1HasDescriptionTop = Template.bind({});
TypeH1HasDescriptionTop.args = {
  title: '新規会員登録の確認',
  descriptionTop:
    'ご入力された内容にお間違いがなければ、「送信する」ボタンを押してください。内容を訂正する場合は、「訂正する」ボタンを押すと編集ページに戻ります。',
};

export const TypeH2 = Template.bind({});
TypeH2.args = {
  type: 'h2',
  title: 'h2-section',
};

export const Integrate = () => {
  return (
    <FormPageSection type="h1" title="ログイン・新規会員登録">
      <FormPageSection type="h2" title="登録済みの方">
        <Skeleton type="div" style={{ height: '100px' }}>
          フォーム
        </Skeleton>
      </FormPageSection>
      <FormPageSection type="h2" title="はじめての方">
        <Skeleton type="div" style={{ height: '100px' }}>
          会員登録ボタン
        </Skeleton>
      </FormPageSection>
    </FormPageSection>
  );
};
