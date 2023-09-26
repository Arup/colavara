import './App.css';
import Heading from './Heading';
import avatar from './avatar.jpeg'
const bool = false;

function Example(props) {
  return (
    <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
  );
};

function Avatar(){
  const myPic = <img src={avatar} alt="altentop"/>
  return myPic;
}

function App() {
  return (
    <div>
      <Heading firstName="Bob" />
      <Heading firstName="Chopin" />
      <Heading firstName="Vivaldi" />
      <Example toggleBoolean={!bool}/>
      <Avatar/>
    </div>
  );
}

export default App;
