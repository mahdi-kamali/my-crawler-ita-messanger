

import "../src/css/global/global.css"
import "../src/css/style/style.css"



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './jsx/pages/auth-pages/LoginPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/*' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
