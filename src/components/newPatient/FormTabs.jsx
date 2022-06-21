import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BasicDataForm from "./BasicDataForm";
import ContactDataForm from "./ContactDataForm";
import AdditionalDataForm from "./AdditionalDataForm";
import DiagnosticDataForm from "./DiagnosticDataForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FormTabs({ state, handleChange }) {
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Dados básicos" {...a11yProps(0)} />
          <Tab label="Dados de contacto" {...a11yProps(1)} />
          <Tab label="Informação adicional" {...a11yProps(2)} />
          <Tab label="Diagnóstico inicial" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="columns">
          <div className="column is-6">
            <BasicDataForm handleChange={handleChange} state={state} />
          </div>
          <div className="column is-6 is-hidden-touch">
            <h1 className="title has-text-centered">Info</h1>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="columns">
          <div className="column is-6">
            <ContactDataForm handleChange={handleChange} state={state} />
          </div>
          <div className="column is-6 is-hidden-touch">
            <h1 className="title has-text-centered">Info</h1>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="columns">
          <div className="column is-6">
            <AdditionalDataForm handleChange={handleChange} state={state} />
          </div>
          <div className="column is-6 is-hidden-touch">
            <h1 className="title has-text-centered">Info</h1>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="columns">
          <div className="column is-6">
            <DiagnosticDataForm handleChange={handleChange} state={state} />
          </div>
          <div className="column is-6 is-hidden-touch">
            <h1 className="title has-text-centered">Info</h1>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
