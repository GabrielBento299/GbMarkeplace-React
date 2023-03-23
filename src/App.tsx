import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/cartContext';
import { GlobalStyle } from './styles/global';
import Router from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';


export default function App() {

  return (
    <BrowserRouter>
        <CartProvider>
          <Header />
          <GlobalStyle />
          <Router />
          <ToastContainer autoClose={3000} theme="colored" position="top-center" />
        </CartProvider>
      </BrowserRouter>
  )
}

