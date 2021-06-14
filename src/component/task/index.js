import React, {useEffect, useState} from "react";
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { CardActions, CardHeader } from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const Task = () => {
  // CSS styles
  const useStyles = makeStyles(theme => ({
    paper: {
      backgroundColor: "#e9ecd1",
      maxWidth: 600,
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
    }
  }));

  const classes = useStyles();

  // Third-party API for getting current time and date I WISH THIS WOULD WORK LMAO
  const [time, setTime] = useState(loadTime);
  
  async function loadTime() {
    const time = await axios({
      method: 'get',
      url: 'https://market.mashape.com/parsify/format#time'
    });
    const getTime = time.data.formatted.handTime;
  
    setTime({
      timeAndDate: getTime
    });
  }
  
  useEffect(() => {
    loadTime();
  }, []);

  // Render new task
  return (
    <Card style={{ padding: 16 }} className={classes.paper}>
      <CardHeader action={
        <Button
        className={classes.button} 
        variant="contained" 
        size="small"
        startIcon={<DoneIcon />}
      >
        Completed
      </Button>
      }
      />
      <Grid 
        container 
        alignItems="flex-start" 
        spacing={2}
      >
        <Grid item xs={12}>
          <TextField 
            fullWidth
            required
            type="text"
            label="Task Name"
          />
        </Grid>
        <Grid item xs={12}>
          Date Created:
          {time.timeAndDate}
        </Grid>
        <Grid item xs={12}>
          <Grid
          container
          alignItems="flex-start"
          spacing={2}
          >
            <Grid item xs={4}>
              Status
            </Grid>
            <Grid item xs={4}>
              To Do
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
          fullWidth
          type="text"
          label="Task Description"
        />
        </Grid>
        <CardActions>
        <Grid item xs={6}>
          <Button
          className={classes.button} 
          variant="contained" 
          size="small"
          startIcon={<DeleteIcon />}
          >
            Delete
          </Button>  
        </Grid>
        <Grid item xs={6}>
          <Button
            className={classes.button} 
            variant="contained" 
            size="small"
            startIcon={<CreateIcon />}
            >
              Create
            </Button>
        </Grid>
        </CardActions>
      </Grid>
    </Card>
  )
}

export default Task