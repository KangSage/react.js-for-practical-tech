import './App.css';
import Info from './Info';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      <Info visible={visible} />
    </div>
  );
}

export default App;
