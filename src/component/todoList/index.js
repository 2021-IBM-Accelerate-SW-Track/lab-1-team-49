import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import TaskCard from '../taskCard'
import Alert from '@material-ui/lab/Alert';
import { FormatListBulletedSharp } from '@material-ui/icons';


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
      list: [],
      duplicate: false,
    };
    this.changeState = this.changeState.bind(this);
  }
  

  // Changes status of task
  changeState = (title) => {
    if(this.state.list[this.state.list.findIndex(task => task.title === title)].status === false) {
      this.setState(prevState => {
        let currState = Object.assign({}, prevState);
        currState.list[currState.list.findIndex(task => task.title === title)].status = true;
        return currState;
      })
    } else{
      this.setState(prevState => {
        let currState = Object.assign({}, prevState);
        currState.list[currState.list.findIndex(task => task.title === title)].status = false;
        return currState;
      })
    }
    
  }

  // Function to add created task to list of tasks
  addTask = (task) => {
    console.log('task',task);
    console.log('list', this.state.list);
    if (task.delStatus === false){
      this.state.list.push(task)
    }

    var duplicate = FormatListBulletedSharp;
    // If the list is empty
    if(this.state.list.length===0) {
      console.log('task',task);
      console.log('list', this.state.list);
      this.state.list.push(task)
    }
    else { // List contents exist
      // Iterate through the list
      for(var i=0; i<this.state.list.length; i++) {
        if(this.state.list[i].title===task.title) { // If current title equals any existing titles
          duplicate=true;
          this.setState(prevState => {
            let currState = Object.assign({}, prevState);
            currState.duplicate = true;
            return currState;
          })
          // console.log(duplicate);
          break;
          // Display message that says this title already exists
        }
        // else {
        //   duplicate=false;
        //   console.log(duplicate);
        // }
      }
      // if(duplicate===true) {
      //   console.log('this exists');
      // }
      // else {
      //   console.log('this doesnt exist');
      //   this.state.list.push(task)
      // }
      if (duplicate === false) {
        this.state.list.push(task);
        console.log("hello");
      }
    }


    // Start iterating through task and comp
    // If you find one that is equal, end the loop and say you found a duplicate
    // If not, then display as normal

    //I dont fully understand setState so I am just gonna push the task to the list - mieraf
    // this.setState(state => {
    //   const list = state.list.concat(task);
    //   console.log(list);
    //   return list;
    // })
  }

  render() {
    console.log(this.state.list);
    return (

      <Grid>
        <div>
          {this.state.duplicate ? 
          <Alert variant="outlined" severity="error">
            You have already created this task. Create another one!
          </Alert> :
          '' }
        </div>

      {this.state.list.length ?
        <div>
          {this.state.list.map(task =>
            <TaskCard task={task} handleChange={this.changeState}/>
          )}
        </div>
        :<p>Congrats! You have no tasks.</p> }

      </Grid>
    );
  }

  
}


export default withStyles(styles)(TodoList)
