import React from 'react';
import './App.css';
import { MuiThemeProvider, Button } from '@material-ui/core';
import theme from './theme'

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Button variant="outlined" onClick={()=>{}} color="primary">hoge</Button>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
