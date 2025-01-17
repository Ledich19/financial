import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import InvestmentCalculator from "./components/Game/InvestmentCalculator";
const tg = window.Telegram.WebApp;

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
      };
    };
  }
}

function App() {

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<InvestmentCalculator />} />
        <Route path="investment-calculator" element={<InvestmentCalculator />} />
      </Routes>
    </>
  );
}

export default App;
