import React from 'react';
import taskListContext from '../../context/getList-context';

import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

/* Radio Button */
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class ListAdd extends React.Component {
  static contextType = taskListContext;

  state = {
    title: '',
    done: null,
  };

  AddDataHandler = () => {
    this.context.addTask({ title: this.state.title, done: Boolean(+this.state.done) });
    this.setState ({ title: '', done: null })
  };

  render() {
    const styles = {
      Card: {
        marginTop: 100,
        marginButton: 100,       
        padding: 30,
        alignItems: "center",
        justifyContent:"space-between",
        borderBottom: '1px solid',
        borderColor: '#ededed',
      }
    };
    return (
      <div>
        <Card style={styles.Card}>
          <h2>Add a new task</h2>

          <TextField id="outlined-required" required label="Task" type="text" fullWidth={true} variant="outlined" defaultValue="task" value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}/>
          <Box mt={5}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Status</FormLabel>
              <RadioGroup aria-label="status" name="status" value={this.state.done} onChange={event => this.setState({ done: event.target.value })}>
                  <FormControlLabel value="0" control={<Radio />} label="To do" />
                  <FormControlLabel value="1" control={<Radio />} label="Done" />
              </RadioGroup>
            </FormControl>
          </Box> 
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={this.AddDataHandler}> <AddIcon/> create </Button>
          </Box>
        </Card>
      </div>
    );
  }
}

export default ListAdd;
