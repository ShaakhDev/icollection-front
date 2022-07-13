import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import SignupPage from "./pages/SignupPage";
import PrivateRoute from "private/PrivateRoute";
import HomePage from "./pages/HomePage";
import Account from "./pages/Account";
import CreateCollection from 'pages/CreateCollection'
import Collection from './pages/Collection'


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
               <Route path="/account" element={
                  <PrivateRoute>
                     <Account />
                  </PrivateRoute>} />
               <Route path="/create-collection" element={
                  <PrivateRoute>
                     <CreateCollection />
                  </PrivateRoute>
               } />
               <Route path="/collection/:collection_id" element={<Collection />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
