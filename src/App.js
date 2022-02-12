/* Router */
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";

/* Components */
import UsersList from "./pages/UsersList";
import NewUser from "./pages/NewUser";
import EditUser from "./pages/EditUser";
import DeleteUser from "./components/DeleteUser";

/* SI PONGO MAL LA URL NO ME DA ERROR PORQUE EL FETCH FUE
CORRECTO (CREO) TENGO QUE TRATAR LOS ERRORES */

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h2 className="mt-3 mb-5">Dashboard Administration Panel</h2>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="adduser" element={<NewUser />} />
          <Route path="adduser/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
