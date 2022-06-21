import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import ContentPaste from "@mui/icons-material/ContentPaste";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../utils/firebase";
import { addPatientRegistry } from "../../api/patients";

export default function NewRegistry({ patientId }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [state, setState] = React.useState({
    regType: "Consulta",
    subject: "",
    date: "",
    description: "",
    file: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const uploadFile = (e) => {
    console.log(e);
    setLoading(true);
    e.preventDefault();
    const file = e.target?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setState({ ...state, file: downloadURL });
          setLoading(false);
        });
      }
    );
  };

  const handleSubmit = () => {
    setLoading(true);

    const data = {
      patientId,
      ...state,
    };

    addPatientRegistry(data)
      .then((doc) => {
        console.log(doc);
        setLoading(false);
        setState({
          regType: "",
          subject: "",
          date: "",
          description: "",
          file: "",
        });
        setProgress(0);
        handleClose();
        document.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setProgress(0);
        setLoading(false);
      });
  };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>
        <ListItemIcon>
          <ContentPaste fontSize="small" />
        </ListItemIcon>
        <ListItemText>Adicionar registro</ListItemText>
      </MenuItem>
      <Dialog open={open} fullWidth>
        <DialogTitle>Novo Registro</DialogTitle>
        <DialogContent>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Tipo de registro</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select
                      name="regType"
                      value={state.regType}
                      onChange={handleChange}
                    >
                      <option value="Consulta">Consulta</option>
                      <option value="Ficha clinica do Parto">
                        Ficha clinica do Parto
                      </option>
                      <option value="Ficha de Anuncio Operatorio">
                        Ficha de Anuncio Operatorio
                      </option>
                      <option value="Curetagem">Curetagem</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-label is-normal">
              <label class="label">Data</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    name="date"
                    value={state.date}
                    onChange={handleChange}
                    class="input"
                    type="date"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Assunto</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    name="subject"
                    value={state.subject}
                    onChange={handleChange}
                    class="input"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Descrição</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea"
                    rows={2}
                    placeholder="Escreva aqui detalhes importantes sobre o registro"
                    name="description"
                    value={state.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {progress === 0 ? (
            <div class="file">
              <label class="file-label">
                <input
                  onChange={uploadFile}
                  class="file-input"
                  type="file"
                  name="file"
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">Adicionar ficheiro(s)…</span>
                </span>
              </label>
            </div>
          ) : (
            <>
              <progress class="progress is-info" value={progress} max="100">
                {progress}%
              </progress>
              {progress === 100 && (
                <p className="help is-info">Ficheiro carregado com sucesso</p>
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button disabled={loading} onClick={handleClose}>
            Cancelar
          </Button>
          <Button disabled={loading} onClick={handleSubmit}>
            Registrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
