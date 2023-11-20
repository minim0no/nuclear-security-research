import "./App.css";
import Navbar from "./components/Navbar";
import Tool from "./pages/Tool";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Tool />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
