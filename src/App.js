import {useState} from 'react';

export const App = () => {
  const [isActive, setActive] = useState(false);
  
  const colorControl = () => {
    setActive(!isActive)
  }

  return (
    <div onClick={colorControl} style={{color: isActive && 'red'}}>
      Hello, function components!
    </div>
  );
};