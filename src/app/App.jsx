import { HashRouter, Route, Routes } from "react-router-dom";
import HomPage from "../routes/HomePage";
import NewTodo from "../routes/NewTodo";
import EditPage from "../routes/EditPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomPage />} />
          <Route path="/new" element={<NewTodo />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
