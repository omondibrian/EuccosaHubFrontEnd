import Login from "./components/pages/auth/Login";
import PageNotFound from "./components/pages/404_page/404_page";
import { BrowserRouter, Switch, Route, useLocation,Redirect } from "react-router-dom";
import Home from "./components/pages/home/Home";
import { MobileNav } from "./components/navigation/navbar/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/shards-dashboards.1.1.0.min.css";
import DashBoard from "./components/dashboard";
import ImageCrop from "./components/dashboard/imageCrop/ImageCrop";
import { useSelector  } from "react-redux";
import DashBoardStats from "./components/dashboard/statsOverview";
import { getApplicationState } from "./state/slices/Application";

function App() {
  const { application } = useSelector(getApplicationState)
  return (

      <div className="App">
        <MobileNav />
        <BrowserRouter>
          <Switch>
            <Route path="/login/" render={(prop) => <Login {...prop} />} />
            <Route path="/dashboard" render={() =>
              !application.isUserLoggedIn ? <Redirect to="/login/"/> :  <DashBoard />} />
            <Route path="/crop" render={() => <ImageCrop />} />
            <Route path="/stat" render={() => <DashBoardStats />} />
            <Route path="/" render={() => <Home />} exact={true} />
            <Route path="*" render={() => <PageNotFound />} />
          </Switch>
        </BrowserRouter>
      </div>

  );
}

export default App;
