import { Routes, Route } from 'react-router-dom'
import AuthRootComponent from './components/auth/AuthRootComponent';
import PrivateRoute from './utils/router/PrivateRoute';
import MainPage from './components/mainPage/MainPage';
import { ListItem } from '@mui/material';

import Item2 from './components/Item2/Item2.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<MainPage />} />
          <Route path='item2' element={<Item2 />} />
        </Route>
        <Route path='login' element={<AuthRootComponent />} />
        <Route path='register' element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
