import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import FavoriteCards from "./components/FavoriteCards";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import List from "./components/List/List";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<FavoriteCards />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
