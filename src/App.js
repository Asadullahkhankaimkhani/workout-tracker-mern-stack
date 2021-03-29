import {BrowserRouter as Router , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
      <Router>
      <Navbar />
      <br/>
      <Route path = "/" exact component = {ExcersiesList} />
      <Route path = "/edit/:id"  component = {EditExcersie} />
      <Route path = "/create"  component = {CreateExcerise} />
      <Route path = "/user"  component = {CreateUser} />
      </Router>
    </div>
  );
}

export default App;
