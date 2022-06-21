import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createNewTag } from "../../api/settings";

export default function NewTagModal({ selectedDialog, handleClose }) {
  const [loading, setLoading] = React.useState(false);
  const [state, setState] = React.useState({
    abr: "",
    description: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const clearState = () => {
    setState({
      abr: "",
      description: "",
    });
  };

  const create = () => {
    setLoading(true);
    createNewTag(state)
      .then((data) => {
        alert("Etiqueta cadastrada com sucesso: ");
        setLoading(false);
        clearState();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Dialog open={selectedDialog === "newTag" ? true : false}>
        <DialogTitle>Cadastrar etiqueta</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha o formulário abaixo para criar uma nova etiqueta
          </DialogContentText>
          <TextField
            margin="dense"
            name="description"
            label="Descrição"
            type="text"
            fullWidth
            variant="standard"
            value={state.description}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="abr"
            label="Abreviatura"
            type="text"
            fullWidth
            variant="standard"
            value={state.abr}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button disabled={loading} onClick={handleClose}>
            Cancelar
          </Button>
          <Button disabled={loading} onClick={create}>
            Registrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
