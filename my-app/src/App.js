import React, { Suspense } from "react";
import { connect, Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  withRouter,
  Switch,
  Redirect,
} from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/appReducer";
import store from "./redux/reduxStore";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

const Login = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some error occurred");
    console.error(promiseRejectionEvent);
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/profile" />
              </Route>
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/login" render={() => <Login />} />
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
