import './css/style-form.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Audio } from  'react-loader-spinner';

const Main = lazy(() => import('./components/Main'));
const LogIn = lazy(() => import('./components/LogIn'));
const Contacts = lazy(() => import('./components/Contacts'));
const Error404 = lazy(() => import('./components/Error404'));

document.title = "Salary Balance"
function App() {

  return (
    <div className='home'>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div className="body__spinner" ><Audio height = "80" width = "80" radius = "9" color = 'black' ariaLabel = 'three-dots-loading' wrapperStyle wrapperClass /></div>}>
          <Routes>
            <Route element={<LogIn />} path='/'/>
            <Route element={<Main />} path='/main'/>
            <Route element={<Contacts />} path='/contacts'/>
            <Route element={<Error404 />} path='/*'/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
