import Login from './components/pages/auth/Login'
import PageNotFound from './components/pages/404_page/404_page'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/pages/home/Home'
import {MobileNav} from './components/navigation/navbar/index'
function App() {
  return (
    <div className="App">
      <MobileNav/>
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={()=><Login/>}/>
          <Route path="/404" render={()=><PageNotFound/>}/>
          <Route path="/" render={()=><Home/>}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
