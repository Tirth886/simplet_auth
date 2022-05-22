import { UserLogin, Home, UserRegister, App as AppCmp, Project } from './components/module';
import { Route, Routes, HashRouter } from 'react-router-dom'
import SimpletRoutes from './helper/Routes'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={SimpletRoutes.HOME.INDEX} element={<Home />} exact />
        <Route path={SimpletRoutes.HOME.LOGIN} element={<UserLogin />} exact />
        <Route path={SimpletRoutes.HOME.REGISTER} element={<UserRegister />} exact />
        <Route path={SimpletRoutes.APP.INDEX} element={<AppCmp />} exact />
        <Route path={SimpletRoutes.PROJECT.INDEX} element={<Project />} exact />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App