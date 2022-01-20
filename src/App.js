import { WelcomeHOC } from './Welcome/WelcomeHOC';
import { Welcome } from './Welcome/Welcome';

import './App.css';


function App() {
  return (
    <div className="App">
      <WelcomeHOC WrappedComponent={Welcome} />
    </div>
  );
}

export default App;
