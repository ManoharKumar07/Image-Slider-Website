import './App.css';
import Header from './Components/Header';
import ImageSlider from './Components/ImageSlider';
import AddImage from './Components/AddImage';
import {BrowserRouter as Router ,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
     <Header/> 
     <Routes>
     <Route path='/' element={<ImageSlider/>}/>
     <Route path='/addImage' element={<AddImage/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
