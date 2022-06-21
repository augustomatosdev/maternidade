import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createRegNum } from "../../api/settings";

export default function RegNumModal({ selectedDialog, handleClose }) {
  const [loading, setLoading] = React.useState(false);
  const [state, setState] = React.useState({
    description: "",
    startNum: 1,
    year: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const clearState = () => {
    setState({
      description: "",
      startNum: 1,
      year: "",
    });
  };

  const create = () => {
    setLoading(true);
    createRegNum(state)
      .then((data) => {
        alert("Numeração cadastrada com sucesso: ", data.id);
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
      <Dialog open={selectedDialog === "regNum" ? true : false}>
        <DialogTitle>Cadastrar tipo de registro</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha o formulário abaixo para criar um novo tipo de registro.
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
            name="startNum"
            label="Numeração inicial"
            type="number"
            fullWidth
            variant="standard"
            value={state.startNum}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="year"
            label="Ano"
            type="number"
            fullWidth
            variant="standard"
            value={state.year}
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
