 import Home from "./pages/Home";
 import "./App.css";
 import NotFound from "./pages/NotFound";
 import About from "./pages/About";
 import Header from "./components/Header";
 import Footer from "./components/Footer";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import "bootstrap/dist/css/bootstrap.min.css";
 function App() {
   return (
     <div className="App">
       <BrowserRouter>
         <Header />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="*" element={<NotFound />} />

         </Routes>
         <Footer />
       </BrowserRouter>
     </div>
   );
 }
 export default App;