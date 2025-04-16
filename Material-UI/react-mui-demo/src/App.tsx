// Es el componente principal de mi app. Este normalmente importa otros componentes 

import './App.css';
import { MuiButton } from './components/MuiButton';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      {/*<MuiTypography></MuiTypography>*/}
      <MuiButton></MuiButton>
    </div>
  );
}

export default App;
