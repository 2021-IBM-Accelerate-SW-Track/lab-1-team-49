import React, {useEffect, useState} from "react";
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


// New Task Form that appears when "New Task" Button is clicked
const NewTask = (props) => {

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
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    }
  }));

  const classes = useStyles();

  // Render new task
  return (
    <Card style={{ padding: 16 }} className={(classes.paper)}>
      <CardHeader
      action={
        <IconButton
        onClick={() => props.handleClose()}
        >
          <CloseIcon />
        </IconButton>
      }
      title="New Task"
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
            id="title"
            type="text"
            label="Task Name"
            //data-testid="new-item-input"
            onChange={(e) => props.handleChange("title", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          Date Created:
          <TextField
            id="date"
            type="datetime-local"
            className={classes.textField}
            onChange={(e) => props.handleChange("date", e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
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
            <Grid item xs={4} id="status">
              To Do
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
          fullWidth
          id="des"
          type="text"
          label="Task Description"
          onChange={(e) => props.handleChange("des", e.target.value)}
        />
        </Grid>
        <CardActions>
        {/* <Grid item xs={6}>
          <Button
          className={classes.button}
          variant="contained"
          size="small"
          startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Grid> */}
        <Grid item xs={6}>
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            startIcon={<CreateIcon />}
            onClick={props.handleSubmit}
            //data-testid="new-item-button"
            >
              Create
            </Button>
        </Grid>
        </CardActions>
      </Grid>
    </Card>
  )
}

export default NewTask
