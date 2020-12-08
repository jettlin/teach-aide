import { Button, Dialog as MuiDialog, DialogActions } from '@material-ui/core';
import Body from './body';
import Title from './title';

const Dialog = ({ open, onClose, title, children }) => (
  <MuiDialog onClose={onClose} open={open}>
    {title && <Title>{title}</Title>}
    <Body>{children}</Body>
    <DialogActions>
      <Button onClick={onClose}>OK</Button>
    </DialogActions>
  </MuiDialog>
);

export default Dialog;
