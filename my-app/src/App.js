import logo from './logo.svg';
import './App.css';
import { Child } from './Child';


function App() {
  function outerHandle() {
    console.log('This is the parent')
  }

  return (
    <div onClick={outerHandle}>
      <Child name='Child 1'/>
      <Child name='Child 2'/>
      <Child name='Child 3'/>
      <Child name='Child 4'/>
    </div>
  )
}

export default App;
