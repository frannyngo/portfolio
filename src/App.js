import React, { Component } from "react";
import { Background } from "./global_styles/theme";
import About from "./components/about/about";
import Header from "./components/header/header";
// import Nav from "./components/nav/nav";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
// import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <Background>
        <Header />
        {/* <Nav /> */}
        <About />
        <Experience />
        <Portfolio />
        {/* <Contact /> */}
        <Footer />
      </Background>
    );
  }
}

export default App;
