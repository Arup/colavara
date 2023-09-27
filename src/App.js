import './App.css';
import Heading from './Heading';
import avatar from './avatar.jpeg'
import Btn from './Btn';
import Btn2 from './Btn2';
import Btn3 from './Btn3';
import ModeToggler from './ModeToggler';
import Child from './Child';
import InputComponent from './components/InputComponent';
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
  const date = new Date();
  return (
    <div>
      <Heading firstName="Bob" />
      <Heading firstName="Chopin" />
      <Heading firstName="Vivaldi" />
      <Example toggleBoolean={!bool}/>
      <Btn/>
      <br/>
      <Btn2/>
      <br/>
      <Btn3/>
      <ModeToggler/>
      <br/>
      <Child message={date.toLocaleDateString()}/>
      <br/>
      <InputComponent/>
      <br/>

    </div>
  );
}

export default App;
