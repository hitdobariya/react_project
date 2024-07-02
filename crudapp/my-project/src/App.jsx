import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Edit from './component/Edit';
import Add from './component/Add';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;