import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import AddSuperVillain from "./pages/AddSuperVillain";
import AllSuperVillain from "./pages/AllSuperVillain";
import UpdateSuperVillain from "./pages/UpdateSuperVillain";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AllSuperVillain></AllSuperVillain>}></Route>
        </Routes>
        <Routes>
          <Route
            path="/add-supervillain"
            element={<AddSuperVillain></AddSuperVillain>}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/update-supervillain/:id"
            element={<UpdateSuperVillain></UpdateSuperVillain>}
          ></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
