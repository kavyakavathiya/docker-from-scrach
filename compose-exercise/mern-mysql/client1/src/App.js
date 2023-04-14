import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './pages/Add';
import Display from './pages/Display';
import Edit from './pages/Edit';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Add />} />
          <Route path="/Display" element={<Display />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
