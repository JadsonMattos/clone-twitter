import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import NotFound from './pages/not-found';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      {/* <h1>Clone Twitter</h1> */}
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/profile/:username" element={ <Profile /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
