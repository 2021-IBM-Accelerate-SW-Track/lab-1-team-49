import Main from "./component/main"
import Task from "./component/task"
import './App.css';
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
    {/* <Task /> */}
    </ThemeProvider>
  );
}

export default App;
