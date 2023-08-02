import Homepage from "./component/Homepage";
import ParticlesBackground from './component/ParticlesBackground';
import GlobalStyles from "./component/GlobalStyles";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover relative overflow-hidden">
      <GlobalStyles />
      <div className="max-w-6xl mx-auto text-white">
        <Homepage />
      </div>
      <div className="w-full h-screen absolute top-0 left-0">
        <ParticlesBackground />
      </div>
    </div>
  );
}

export default App;