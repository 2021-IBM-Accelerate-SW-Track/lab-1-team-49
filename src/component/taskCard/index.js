import React, {useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CurrentTask from '../currentTask';

const TaskCard = () => { 
  const useStyles = makeStyles(theme => ({
    title: {
      padding: "20px",
      fontSize: 20,
    },
    button: {
      backgroundColor: "#c9ccaf",
      color: "#20170E",
      borderRadius: "25px",
      marginTop: "25px",
      '&:hover': {
        backgroundColor: '#ced5b8',
        color: '#20170E',
      }
    },
  }));

  const classes = useStyles();

  // Styling for background color change of completion state
  const incompleteColor = {
    backgroundColor: "#f7ecd4",
    maxWidth: 275,
  }

  const completeColor = {
    backgroundColor: "#e9ecd1",
    maxWidth: 275,
  }

  // Changes state of not complete to complete
  const [isComplete, setComplete] = useState(false);
  const complete = () => setComplete(isComplete => !isComplete);

  // Changes state to show the full current task details
  const [edit, setEdit] = useState(false);
  const show = () => setEdit(edit => !edit);

  // Render new task
  return ( 
    <Fragment>
      
    <Card style={ isComplete ? completeColor : incompleteColor } variant="outlined">
      <Typography className={classes.title}>
        Task Name
      </Typography>
      <CardActions>
        <Button
          className={classes.button} 
          variant="contained" 
          size="small"
          startIcon={<EditIcon />}
          onClick={show}
          >
            Edit
          </Button>
          <Button
          className={classes.button} 
          variant="contained" 
          size="small"
          startIcon={<CheckCircleIcon />}
          onClick={complete}
          >
            Complete
          </Button>
      </CardActions>
    </Card>
    {edit === true ? <CurrentTask /> : ''}
    </Fragment>
  )
}

export default TaskCard