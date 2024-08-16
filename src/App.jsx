import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import WebClient from "./pages/WebClient";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/web-client" element={<WebClient />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
