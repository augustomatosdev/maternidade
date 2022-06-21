import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createDocType } from "../../api/settings";

export default function DocTypeModal({ selectedDialog, handleClose }) {
  const [loading, setLoading] = React.useState(false);
  const [state, setState] = React.useState({
    name: "",
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
      name: "",
      description: "",
    });
  };

  const create = () => {
    setLoading(true);
    createDocType(state)
      .then((data) => {
        alert("Documento cadastrado com sucesso: ", data.id);
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
      <Dialog open={selectedDialog === "docType" ? true : false}>
        <DialogTitle>Cadastrar tipo de documentos</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha o formulário abaixo para criar um novo tipo de documento.
          </DialogContentText>
          <TextField
            margin="dense"
            name="name"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
            value={state.name}
            onChange={handleChange}
          />
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
