import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

// CSS Style
const styles = theme => ({
  header: {
    width: '100%',
    height: '26vh',
    position: 'relative',
    backgroundColor: '#CED5B8',
  },
  title: {
    paddingBottom: theme.spacing(4),
    color: '#20170E',
  },
  button: {
    backgroundColor: "#f7ecd4",
    color: "#20170E",
    borderRadius: "25px",
    marginTop: "25px",
    '&:hover': {
      backgroundColor: '#cfa986',
      color: '#20170E',
    }
  },
});

// Area where tasks after being created are rendered onto
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  // Function to add created task to list of tasks
  addTask = (task) => {
    this.setState(state => {
      const list = state.list.concat(task);
      console.log(list);
      return list;
    })
  }

  render() {
    return (
      <Grid>

      </Grid>
    )
  }
}


export default withStyles(styles)(TodoList)