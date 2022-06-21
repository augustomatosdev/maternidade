import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import RegForm from "./RegForm";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../utils/firebase";
import { registerDoc } from "../../api/documents";

export default function NewRegModal({ selectedDialog, handleClose }) {
  const regNum = 10;
  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const [state, setState] = React.useState({
    regTypeId: "",
    docTypeId: "",
    docRef: "",
    officeId: "",
    subject: "",
    files: "",
    docDate: "",
    needAnswer: "",
  });

  const clearState = () => {
    setState({
      regTypeId: "",
      docTypeId: "",
      docRef: "",
      officeId: "",
      subject: "",
      files: "",
      docDate: "",
      needAnswer: "",
    });
    setProgress(0);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
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
          setState({ ...state, files: downloadURL });
          setLoading(false);
        });
      }
    );
  };

  const handleSubmit = () => {
    setLoading(true);
    registerDoc(state)
      .then((data) => {
        alert("Documento cadastrado com sucesso");
        setLoading(false);
        clearState();
        handleClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Dialog
        open={selectedDialog === "registry" ? true : false}
        // onClose={handleClose}
      >
        <DialogTitle>Novo registro de documento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha atenciosamente os campos abaixo para registrar um
            documento, certifique-se de ter o ficheiro digital disponivel no seu
            equipamento.
          </DialogContentText>
          <br />
          <RegForm
            uploadFile={uploadFile}
            progress={progress}
            state={state}
            handleChange={handleChange}
          />
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
