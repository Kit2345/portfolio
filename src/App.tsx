import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer";
import { Page } from "./types/common";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("about");

  function handleButtonClick(page: Page) {
    // event?.preventDefault();
    setCurrentPage(page);
  }

  return (
    <>
      <Header />
      <Main page={currentPage} />
      <Footer onButtonClick={handleButtonClick} />
    </>
  );
}

export default App;
