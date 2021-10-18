import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import ContactUs from './components/ContactUs/ContactUs';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MissionAndVision from './components/Mission And Vision/MissionAndVision';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import ServiceDetails from './components/Services/ServiceDetails';
import ContextProvider from './components/Context/ContextProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <ContextProvider>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/details/:detailsId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/mission">
              <MissionAndVision></MissionAndVision>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
        </ContextProvider>
    </div>
  );
}

export default App;
