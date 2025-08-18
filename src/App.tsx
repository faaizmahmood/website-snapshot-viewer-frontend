import './App.css'
import Home from './pages/home/home'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "swiper/css";
// import "swiper/css/navigation";
import { Toaster } from "sonner";

function App() {

  return (
    <>
      <Home />

       <Toaster richColors position="bottom-right" />
    </>
  )
}

export default App
