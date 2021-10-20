import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { v4 as uuid } from "uuid";
import routes from "./App.routes";
import { StyledContainer } from "./App.styles";

const App: FunctionComponent = () => {
  const theme = createTheme();
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <StyledContainer
          maxWidth={false}
          sx={{
            height: "100vh",
            py: 7,
            px: 2,
            pb: 2,
            [theme.breakpoints.up("sm")]: {
              py: 8,
              px: 4,
              pb: 4,
            },
          }}
        >
          <Router>
            <Switch>
              {routes.map((route) => (
                <Route key={uuid()} {...route} />
              ))}
            </Switch>
            <Redirect to='/' />
          </Router>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
