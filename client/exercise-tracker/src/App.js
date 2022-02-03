import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExercisesList from './components/ExcercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExcercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div>      
       <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<ExercisesList></ExercisesList>} />
          <Route path="/edit/:id" element={<EditExercise></EditExercise>} />
          <Route path="/create" element={<CreateExercise></CreateExercise>} />
          <Route path="/user" element={<CreateUser></CreateUser>} />
        </Routes>
    </Router>
    </div>


  );
}

export default App;
