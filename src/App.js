import { Header, Footer, Blog, About, Main } from "./component/components";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="podcast/" element={<Main />} />
        <Route path="podcast/blog" element={<Blog />} />
        <Route path="podcast/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
