import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createOffice } from "../../api/settings";

export default function NewOfficeModal({ selectedDialog, handleClose }) {
  const [loading, setLoading] = React.useState(false);
  const [state, setState] = React.useState({
    name: "",
    abr: "",
    phone: "",
    manager: "",
    email: "",
    location: "",
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
      abr: "",
      phone: "",
      manager: "",
      email: "",
      location: "",
    });
  };

  const create = () => {
    setLoading(true);
    createOffice(state)
      .then((data) => {
        alert("Orgão cadastrado com sucesso: ", data.id);
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
      <Dialog open={selectedDialog === "newOffice" ? true : false}>
        <DialogTitle>Cadastrar orgão de correspondência</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha o formulário abaixo para criar um novo orgão de
            correspondência.
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
            name="abr"
            label="Abreviatura"
            type="text"
            fullWidth
            variant="standard"
            value={state.abr}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="manager"
            label="Responsavel do orgão"
            type="text"
            fullWidth
            variant="standard"
            value={state.manager}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={state.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Contacto"
            type="text"
            fullWidth
            variant="standard"
            value={state.phone}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="location"
            label="Localização"
            type="text"
            fullWidth
            variant="standard"
            value={state.location}
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
