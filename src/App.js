import { Routes, Route } from "react-router-dom";
import AuthRootComponent from "./components/auth/AuthRootComponent";
import PrivateRoute from "./utils/router/PrivateRoute";
import MainPage from "./components/mainPage/MainPage";
import ListItem from './components/mainPage/listItem/ListItem'
import {Loader} from "./components/mainPage/loader/Loader";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage />} />
        </Route>
        <Route path="login" element={<AuthRootComponent />} />
        <Route path="register" element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
