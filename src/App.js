import './App.css';
import Quiz from './containers/Quiz/Quiz'
import Aside from './containers/Aside/Aside';

function App() {
  return (
    <div className='app-container' >
      <Quiz/>
      <Aside/>
    </div>
  );
}

export default App;
