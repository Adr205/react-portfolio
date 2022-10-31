import React, { useState } from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import { ThemeContext } from "./contexts/theme-context.ts";
import "./App.scss";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="app">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        {/* <Testimonial /> */}
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
