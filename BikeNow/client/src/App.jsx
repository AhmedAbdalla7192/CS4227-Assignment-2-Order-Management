import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Orders />} />
            </Routes>
        </Router>
    );
}

export default App;
