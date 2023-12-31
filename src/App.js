import { Navigate, Route, Routes } from "react-router-dom";
import "./Assets/Sass/App.scss";
import Homepage from "./Pages/Homepage";
import Character from './Pages/Character'
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Navigate to="/characters" />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/characters" element={<Homepage />} />
        <Route path="/characters/:id" element={<Character />} />
      </Routes>
    </>
  );
}

export default App;
