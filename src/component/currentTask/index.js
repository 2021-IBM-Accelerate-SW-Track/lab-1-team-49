import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { CardActions, CardHeader } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const CurrentTask = (prop) => {

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
    },
  }));

  const classes = useStyles();
  function handleChange(id, value) {
    if (id === "title") {
      prop.task.title = value;
      console.log(prop.task.title);
    } else if (id === "date") {
      prop.task.date = value;
    } else if (id === "des") {
      prop.task.des = value;
    } else if (id === "status") {
      prop.task.status = true;
    }
  }

  function handleClick() {
    //this.setStat({ show: true });
    prop.task.status = true;
  };

  // Function that handles close icon on CurrentTask form

  const [update, setUpdate] = useState(false);
  const show = () => {
    console.log('toggling update');
    setUpdate(update => !update);
  }




  // Render new task
  return (
    <Card style={{ padding: 16 }} className={classes.paper}>
      <CardHeader
      title="Edit Task"
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
            defaultValue={prop.task.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          Date Created:
          {prop.task.date}
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
              {prop.task.status === true ? "Completed" : "To Do"}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
          fullWidth
          type="text"
          label="Task Description"
          defaultValue={prop.task.des}
          onChange={(e) => handleChange("des", e.target.value)}
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
            onClick={show}>
              Update
            </Button>
        </Grid>
        </CardActions>
      </Grid>
    </Card>
  )
}

export default CurrentTask
