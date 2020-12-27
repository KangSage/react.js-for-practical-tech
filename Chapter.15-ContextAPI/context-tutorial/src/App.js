import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';
import ClassSelectColors from './components/ClassSelectColors';

function App() {
  return (
    <ColorProvider>
      <div>
        <ClassSelectColors />
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
