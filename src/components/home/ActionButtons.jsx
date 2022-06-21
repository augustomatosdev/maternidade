import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PostAddIcon from "@mui/icons-material/PostAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArchiveIcon from "@mui/icons-material/Archive";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import NewRegModal from "./NewRegModal";
import NewPatModal from "./NewPatModal";
import { useNavigate } from "react-router-dom";

export default function ActionButtons() {
  const [selectedDialog, setSelectedDialog] = React.useState("");
  const handleClose = () => setSelectedDialog("");
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <NewRegModal selectedDialog={selectedDialog} handleClose={handleClose} />
      <NewPatModal selectedDialog={selectedDialog} handleClose={handleClose} />
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button
          onClick={() => setSelectedDialog("registry")}
          size="large"
          variant="contained"
          startIcon={<PostAddIcon />}
        >
          Cadastrar documento
        </Button>
        <Button
          onClick={() => navigate("/patients/create")}
          size="large"
          variant="contained"
          startIcon={<GroupAddIcon />}
        >
          Cadastrar paciente
        </Button>
        <Button size="large" variant="contained" startIcon={<ArchiveIcon />}>
          Arquivo corrente
        </Button>
        <Button
          size="large"
          variant="contained"
          startIcon={<CloudDownloadIcon />}
        >
          Arquivo morto
        </Button>
      </Stack>
    </React.Fragment>
  );
}
