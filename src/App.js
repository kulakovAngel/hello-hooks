import { useState } from "react";

export const App = () => {
  const [content, setContent] = useState('Hello, function components!')

  const handlerClick = () => {
    setContent('Click happend!')
  }

  return (
    <div onClick={handlerClick}>
      {content}
    </div>
  );
};
