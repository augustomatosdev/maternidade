import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { login } from "../../api/auth";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Maternidade Provincial do Cuanza Sul
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setState({ ...state, error: "" });
    login(state.email, state.password)
      .then(() => {
        setLoading(false);
        console.log("Login was successful");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.code);

        if (err.code === "auth/user-not-found") {
          setState({
            ...state,
            error: "Seu email não foi cadastrado! Contacte o Administrador.",
          });
          return;
        }

        setState({
          ...state,
          error: "Ocorreu um erro, tente novamente por favor.",
        });
        return;
      });
  };

  console.log(state);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <figure class="image is-64x64">
            <img src={Logo} />
          </figure>
          <br />
          <Typography textAlign="center" component="h1" variant="h5">
            Bem vindo a <strong>Maternidade Provincial do Cuanza Sul</strong>
          </Typography>
          <Typography textAlign="center" component="p" variant="h6">
            Use seu email e senha para entrar
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            {state.error && (
              <p className="help has-text-danger is-marginless">
                {state.error}
              </p>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Esqueceste a senha?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
