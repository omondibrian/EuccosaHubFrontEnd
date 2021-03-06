import Login from "./components/pages/auth/Login";
import PageNotFound from "./components/pages/404_page/404_page";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";
import DashBoard from "./components/dashboard";
import ImageCrop from "./components/dashboard/imageCrop/ImageCrop";
import { useSelector } from "react-redux";
import DashBoardStats from "./components/dashboard/statsOverview";
import { getApplicationState } from "./state/slices/Application";
import Register from "./components/pages/auth/Register";
import Logout from "./components/pages/auth/Logout";
import Tree from "./components/directoryTree/Tree"

function App() {
  const { application } = useSelector(getApplicationState);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login/" render={(prop) => <Login {...prop} />} />
          <Route path="/register/" render={(prop) => <Register {...prop} />} />
          <Route
            path="/dashboard"
            render={(prop) =>
              !application.isAuthenticated ? (
                <Redirect to={`/login/?next=${prop.location.pathname}`} />
              ) : (
                <DashBoard />
              )
            }
          />
          <Route path="/logout" render={(props) => <Logout {...props} />} />
          <Route path="/crop" render={() => <ImageCrop />} />
          <Route path="/stat" render={() => <DashBoardStats />} />
          <Route path="/" render={() => <Home />} exact={true} />
          <Route path="/tree" render={() => <Tree/>} />
          <Route path="*" render={() => <PageNotFound />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
