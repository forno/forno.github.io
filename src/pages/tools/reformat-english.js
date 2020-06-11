import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { CopyToClipboard } from "react-copy-to-clipboard";

import Layout from "../../components/layout";

const ReformatEnglish = () => {
  const [text, setText] = React.useState("");
  const handleChange = (event) => {
    const newText = event.target.value
              .replace(/\n/g, " ")
              .replace(/\.   */g, ". \n")
              .replace(/\. ?/g, ".\n");
    setText(newText);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleAnchorOpen = (event) => setAnchorEl(event.currentTarget);
  const handleAnchorClose = () => setAnchorEl(null);
  const anchorOpen = Boolean(anchorEl);
  const anchorId = anchorOpen ? 'copied-popover' : undefined;

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Layout pageTitle="Reformat English" createdYear="2020">
        <h2>Reformat English</h2>
        <p>Reformat english text for translation system.</p>
        <TextField
          id="english-text"
          label="English text(Auto Format)"
          placeholder="Plese put unformated English"
          fullWidth
          variant="outlined"
          multiline
          value={text}
          onChange={handleChange}
        />
        <CopyToClipboard text={text}>
          <Button
            area-describedby={anchorId}
            variant="contained"
            color="primary"
            startIcon={<AssignmentIcon />}
            onClick={handleAnchorOpen}
          >
            Copy
          </Button>
        </CopyToClipboard>
      </Layout>
      <Popover
        id={anchorId}
        open={anchorOpen}
        anchorEl={anchorEl}
        onClose={handleAnchorClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformorigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        Copy success
      </Popover>
    </>
  );
};

export default ReformatEnglish;
