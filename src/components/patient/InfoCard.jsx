import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PatientTabs from "./PatientTabs";
import { Box } from "@mui/material";

export default function InfoCard({ state }) {
  return (
    <Paper>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <div class="icon-text">
              <span class="icon">
                <i class="fas fa-id-card"></i>
              </span>
            </div>
          </ListItemIcon>
          <ListItemText>
            <span>
              {state.credentials &&
                `${state.credentials?.fName} ${state.credentials?.lName}`}
            </span>
          </ListItemText>
          <ListItemIcon>
            <KeyboardArrowDownIcon fontSize="medium" />
          </ListItemIcon>
        </MenuItem>
        <Divider />
      </MenuList>
      <Box>
        <PatientTabs state={state} />
      </Box>
    </Paper>
  );
}
