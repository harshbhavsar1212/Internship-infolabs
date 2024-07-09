import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge, Button} from 'react-bootstrap';
import { Btnbadge,Pillsuccessbadge,Passbadge,Failbadge } from './Navbar';

function App() {
  return (
    <>
    <First/>
    <h1>This is Task 1 of Day 5</h1>
    </>
  );
}

function First(){
  return(
    <div>
      <h2>Practice of adding bootstrap in react app</h2>
    </div>
  );
}

function Second(){
  return (
    <div>
    
      <h5>adding badge</h5>
    </div>
  );
}

export default App;
export {Second};
