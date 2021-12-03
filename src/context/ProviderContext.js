import { useState, useEffect } from 'react'
import AppContext from './AppContext';


function ProviderContext({ children }) {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');

    useEffect( () => {
      const randomNumber = Math.floor((Math.random() * 100) + 1 );
      setNumber(randomNumber); 
      const intervalID  = setInterval(() => {
        const randomNumber = Math.floor((Math.random() * 100) + 1 );
        setNumber(randomNumber);
      }, 10000)

      return( () => { clearInterval(intervalID)})
    }, []);

    useEffect( () => {
        if( number % 3 === 0 && number % 5 === 0 ) {
            setText('Acertou Miseravi');
        } else {
            setText('Eroooooou!');
        }
        const intervalID = setInterval( () => { 
            setText('')
        }, 4000)
        return () => clearInterval(intervalID);
    }, [number] );

    return(
        <AppContext.Provider value={{ number, text }}>
            { children }
        </AppContext.Provider>
    )
}

export default ProviderContext;