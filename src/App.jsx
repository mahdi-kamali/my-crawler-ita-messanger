

import "../src/css/global/global.css"
import "../src/css/style/style.css"





// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './jsx/pages/auth-pages/LoginPage';
import MainPage from "./jsx/pages/main=page/MainPage";
import Header from "./jsx/header/Header";
import SideBar from "./jsx/side-bar/SideBar";



function App() {
  return (
    <body className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/*' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
