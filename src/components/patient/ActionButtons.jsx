import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NewRegistry from "./NewRegistry";

export default function ActionButtons({ patientId }) {
  return (
    <Paper>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <div class="icon-text">
              <span class="icon">
                <i class="fas fa-sliders"></i>
              </span>
            </div>
          </ListItemIcon>
          <ListItemText>Acções</ListItemText>
          <ListItemIcon>
            <KeyboardArrowDownIcon fontSize="medium" />
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Modificar dados</ListItemText>
        </MenuItem>
        <NewRegistry patientId={patientId} />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Adicionar alerta</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
