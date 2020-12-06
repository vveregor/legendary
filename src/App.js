import React from "react";
import {applyMiddleware, compose, createStore} from "redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from "react-redux";
import {routes} from "./routes/routes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";
import {SnackbarProvider} from "notistack";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

function App() {
  return (
      <Provider store={store}>
          <SnackbarProvider maxSnack={3}>
              <Router>
                  <Switch>
                      {routes.map(({ auth, component, path, exact }, index) => {
                          return auth ? (
                              <PrivateRoute key={index} component={component} path={path} exact={exact} />
                          ) : (
                              <Route key={index} component={component} />
                          );
                      })}
                  </Switch>
              </Router>
          </SnackbarProvider>
      </Provider>
  );
}

export default App;
