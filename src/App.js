import React, { useContext } from 'react';
import AppContext from './context/AppContext';
import ProviderContext from './context/ProviderContext';
import RandomNumber from './components/RandomNumber';

function App() {
  
  return (
    <div className="App">
     <ProviderContext>
      <RandomNumber />
     </ProviderContext> 
    </div>
  );
}

export default App;
