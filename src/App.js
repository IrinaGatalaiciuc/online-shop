import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Header from "./components/Header";
import Items from "./pages/Items";
import Footer from "./components/Footer";
import Context from "./context/Context";



function App() {
  return (
    <BrowserRouter>
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/product/:category" element={<Items />} />
        </Routes>
        <br />
        <Footer />
      </Context>
    </BrowserRouter>
  );
}

export default App;
