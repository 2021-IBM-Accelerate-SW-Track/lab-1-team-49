import Main from "./component/main"
import NewTask from "./component/newTask"
import CurrentTask from './component/currentTask'
import TaskCard from './component/taskCard'
import './App.css';
import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Change font to Bebas Neue
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Bebas Neue', 
      'cursive'
    ].join(','),
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Main/>
    </div>
    </ThemeProvider>
  );
}

export default App;
