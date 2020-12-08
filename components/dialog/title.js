import { DialogTitle, Typography } from "@material-ui/core";

const Title = ({ children }) => (
  <DialogTitle disableTypography>
    <Typography variant="h6">{children}</Typography>
  </DialogTitle>
);

export default Title;
