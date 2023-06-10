import "./App.css";
import NotFound from "./modules/NotFound/NotFound";
import Home from "./modules/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="test" element={<Home />} />
            </Routes>
        </div>
    );
}


export default App;
