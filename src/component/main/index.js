import Typography from '@material-ui/core/Typography';
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import NewTask from '../newTask'

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
  // Overlay
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ show: true });
  };

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
            {show === true ? <NewTask /> : ''}
          </Grid>
          <Grid item xs={12}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={6}
            >
              <Grid item xs={12}>
                <Typography variant="h4" className={classes.title}>
                  To-Do
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" className={classes.title}>
                  Done
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem />
        </Grid>
      </section>
      )
    }
}

export default withStyles(styles)(Main)