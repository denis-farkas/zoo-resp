import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Prestation from "./pages/Prestation";
import Avis from "./pages/Avis";
import Contact from "./pages/Contact";
import Habitats from "./pages/Habitats";
import Histoire from "./pages/Histoire";
import Habitat from "./pages/Habitat";
import Soigneur from "./pages/Soigneur";
import Actualite from "./pages/Actualite";
import Mission from "./pages/Mission";
import Animal from "./pages/Animal";
import { ToastContainer } from "react-toastify";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import UserProfile from "./pages/userProfile";
import BackOffice from "./pages/backOffice";
import BackUser from "./pages/backUser";
import EditUser from "./pages/editUser";
import BackMessage from "./pages/backMessage";
import BackAvis from "./pages/backAvis";
import DeleteMessage from "./components/DeleteMessage";
import DeleteAvis from "./components/DeleteAvis";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import BackAnimal from "./pages/backAnimal";
import EditAnimal from "./pages/editAnimal";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestation" element={<Prestation />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/habitats" element={<Habitats />} />
          <Route path="/habitat/:id_habitat" element={<Habitat />} />
          <Route path="/soigneur" element={<Soigneur />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/animal/:id" element={<Animal />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/backOffice" element={<BackOffice />} />
          <Route path="/backUser" element={<BackUser />} />
          <Route path="/backMessage" element={<BackMessage />} />
          <Route path="/deleteOneMessage/:id" element={<DeleteMessage />} />
          <Route path="/backAvis" element={<BackAvis />} />
          <Route path="/deleteOneAvis/:id" element={<DeleteAvis />} />
          <Route path="/backAnimal" element={<BackAnimal />} />
          <Route path="/editUser/:id" element={<EditUser />} />
          <Route path="/editAnimal/:id" element={<EditAnimal />} />
          <Route path="*" element={<p>Error 404</p>} />
        </Routes>

        <Footer />

        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
