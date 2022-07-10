import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import SignupPage from "./pages/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";

function App() {

   return (
      <div className="h-100 bg-white bg-[url('/public/Bg.webp')] dark:bg-dark transition duration-200">
         <Router>
            <Routes>
               <Route path="/" element={
                  <HomePage />

               } />
               <Route path="/login" element={<LoginPage />} />
               <Route path="/signup" element={<SignupPage />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
