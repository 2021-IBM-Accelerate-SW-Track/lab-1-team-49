import Typography from '@material-ui/core/Typography';
import React, {useState} from "react";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import NewTask from '../newTask'
import TodoList from '../todoList'

// CSS styles
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

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      status: false,
      date: new Date(),
      des: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.childElement = React.createRef();
  }

  // Function passed into newTask form to handle changes in text fields and store into this.state
  handleChange = (id, value) => {
    if (id === "title") {
      this.state.title = value;
      console.log(this.state.title);
    } else if (id === "date") {
      this.state.date = value;
    } else if (id === "des") {
      this.state.des = value;
    } else if (id === "status") {
      this.state.status = true;
    }
  }

  // Function that shows newTask form when button is clicked
  handleClick = () => {
    this.setState({ show: true });
  };

  // Function that handles close icon on newTask form
  handleClose = () => {
    this.setState({ show: false });
  }

  // Function that handles submit button on newTask form
  handleSubmit = () => {
    this.childElement.current.addTask(this.state);
  }

  // Render main portion of task list
    render() {
      const { show } = this.state;
      const { classes } = this.props;
      return(
        <section className={classes.header}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3" component="h1" className={classes.title}>
            Task List
          </Typography>
        </Box>
        <Grid
          container
          direction="column"
          spacing={5}
        >
          <Grid item xs={12}>
            <Button 
              className={classes.button} 
              variant="contained" 
              size="medium"
              startIcon={<AddIcon />}
              onClick={() => this.handleClick(true)}
            >
                New Task
            </Button>
            {show === true ? <NewTask data={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClose={this.handleClose}/> : ''}
          </Grid>
          <Grid item xs={12}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={6}
            >
              {/* <Grid item xs={12}>
                <Typography variant="h4" className={classes.title}>
                  To-Do
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" className={classes.title}>
                  Done
                </Typography>
              </Grid>
            </Grid> */}
          </Grid>
          {/* <Divider orientation="vertical" flexItem /> */}
        </Grid>
        </Grid>

        <Grid>
          <TodoList ref={this.childElement}/>
        </Grid>
      </section>
      )
    }
}

export default withStyles(styles)(Main)