import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

function DrawerList({ open }) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <List>
        {[
          { title: "Inicio", link: "/" },
          { title: "Pacientes", link: "/patients" },
          { title: "Arquivo corrente", link: "/archive/current" },
          { title: "Arquivo geral" },
          { title: "Arquivo físico" },
        ].map((el, index) => (
          <ListItem key={el.title} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(el.link)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={el.title} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { title: "Configurações", link: "/settings" },
          { title: "Ajuda" },
          { title: "Sair" },
        ].map((el, index) => (
          <ListItem key={el.title} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(el.link)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={el.title} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

export default DrawerList;
