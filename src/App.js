//import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Header from "./layout/Header";
import routes, { loginRoute } from "./router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import store from "./store";

const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className={classes.container}>
        <Router>
          <Header />
          <Container>
            <Switch>
              {routes.map((route, i) => (
                <Route
                  exact
                  path={route.path}
                  render={(props) => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} />
                  )}
                />
              ))}
              <Route
                exact
                path={loginRoute.path}
                render={(props) => (
                  // pass the sub-routes down to keep nesting
                  <loginRoute.component {...props} />
                )}
              />
            </Switch>
          </Container>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
