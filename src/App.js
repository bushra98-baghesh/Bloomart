import Navbar from "./components/navbar/Navbar";
import Home from "./components/homepage/Home";
import Products from "./components/productPage/Products";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Details from "./components/Details";
import Feature from "./components/featured/Feature";
import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Footer from "./components/footer/Footer";
function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        mutiplier: 3,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <ScrollTriggerProxy />
      <main className="App" data-scroll-container ref={containerRef}>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Feature />
                <About />

                {/* <Products></Products> */}
                <Footer />
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="products/:productId" element={<Details />} />
        </Routes>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
