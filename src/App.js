import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.4.0";
import "./assets/demo/demo.css?v=1.4.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

export default function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        
        {/* <Route path="*" element={<Navigate to="/about" replace />} /> */}

      </Routes>


    </div>
  );
}