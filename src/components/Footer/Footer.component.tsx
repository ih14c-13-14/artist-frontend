import { IconWithLabel } from '../commons/IconWithLabel/IconWithLabel.component';
import { StackChildren } from '../commons/Styling/StackChildren/StackChildren';
import {
  Approval,
  LocationOn,
  ManageSearch,
  CropFree,
} from '@mui/icons-material';

export const Footer = () => {
  return (
    <StackChildren flexDirection="row">
      <IconWithLabel icon={LocationOn} label={'マップ'} fullWidth color='error' />
      <IconWithLabel icon={ManageSearch} label={'探す'} fullWidth />
      <IconWithLabel icon={CropFree} label={'QRリーダー'} fullWidth />
      <IconWithLabel icon={Approval} label={'スタンプ'} fullWidth />
    </StackChildren>
  );
};
