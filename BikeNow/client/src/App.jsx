import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
            <Router>
                <Header />
                {/* Centering the main content */}
                <main className="flex-grow flex items-center justify-center">
                    <div className="w-full max-w-4xl p-6">
                        <Routes>
                            <Route path="/" element={<Orders />} />
                        </Routes>
                    </div>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
