import React from 'react';
import taskListContext from '../../context/getList-context';
import ListTask from '../ListTask/ListTask';
import ListAdd from '../ListAdd/ListAdd';

import MaterialTabs from '../../components/UI/MaterialTabs/MaterialTabs';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

/* Radio Button */
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class ListTasks extends React.Component {

  static contextType = taskListContext;

  state = {
    oldId: null,
    oldTitle: '',
    oldstatus: true,
    selected: false,
    showEditBox: true
  };

  editHandler = (event, i) => {
    const todolist = this.context.task;
    const todoItem = todolist.find(t => t.id === i);
    this.setState({
      oldTitle: todoItem.title,
      oldState: todoItem.done ? 1 : 0,
      oldId: todoItem.id,
      showEditBox: false
    });
  };

  selectHandler = (event) => {
    const select = this.state.selected
    this.setState({ selected: !select })
  }

  editTaskToNewData = event => {
    this.context.editTask({
      id: this.state.oldId,
      title: this.state.oldTitle,
      done: this.state.oldState,
    });
    this.setState({ oldTitle: '', oldstatus: null,  showEditBox: true })
  };

  render() {
    const allTasks = this.context.loading ? <CircularProgress/> : this.context.task.map(i => {
      return (
        <ListTask
          key={i.id}
          id={i.id}
          title={i.title}
          done={i.done ? 'DONE' : 'TO DO'}
          edit={event => this.editHandler(event, i.id)}
          select={event => this.selectHandler(event)}
          delete={() => this.context.deleteTask(i.id)}>
          </ListTask>
      );
    });

    const todoTasks = this.context.task.map(i => {
      if (i.done == 0) 
        return (
        <ListTask 
          key={i.id} id={i.id} title={i.title}
          edit={event => this.editHandler(event, i.id)}
          select={event => this.selectHandler(event)}
          delete={() => this.context.deleteTask(i.id)}>
        </ListTask>)
    })

    const doneTasks = this.context.task.map(i => {
      if (i.done == 1) 
        return ( 
        <ListTask key={i.id} id={i.id} title={i.title}
          edit={event => this.editHandler(event, i.id)}
          select={event => this.selectHandler(event)}
          delete={() => this.context.deleteTask(i.id)}>
        </ListTask>)
    })

    const styles = {
      Card: {
        margin: "auto",
        marginTop: 50,
        marginButton: 50,
        padding: 30,
        alignItems: "center",
        justifyContent:"space-between",
        borderBottom: '1px solid',
        borderColor: '#ededed',
      },
      Tabs: {
        marginTop: 50
      }
    };

    return (
      <div>
        <section>
          <ListAdd />
        </section>

        <section>
          {this.state.showEditBox ? null :
          <Card style={styles.Card}>
            <h2>Edit task</h2>
              <TextField id="outlined-required" fullWidth={true} label="Task" type="text" variant="outlined" defaultValue="task" value={this.state.oldTitle}
              onChange={event => this.setState({ oldTitle: event.target.value })}/>
              <Box mt={5}>
                <label>Status</label>
                <br/>
                <select value={this.state.oldState} onChange={event => this.setState({ oldState: Boolean(+event.target.value) })}>
                  <option value="0">TO DO</option>
                  <option value="1">DONE</option>
                </select>
              </Box>
              <Box mt={5}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Status (Inactive) </FormLabel>
              <RadioGroup aria-label="status" name="status" value={this.state.oldState} onChange={event => this.setState({ oldState: Boolean(+event.target.value) })}>
                  <FormControlLabel value="0" control={<Radio />} label="To do" />
                  <FormControlLabel value="1" control={<Radio />} label="Done" />
              </RadioGroup>
            </FormControl>
            </Box>
            <Box mt={5} display="flex" justifyContent="center">
              <Button variant="contained" color="primary" onClick={this.editTaskToNewData}> EDIT </Button>
            </Box>
          </Card>
          }
        </section>

        <section>
          <Card variant="outlined" style={styles.Tabs}> 
            <MaterialTabs all={allTasks} todo={todoTasks} done={doneTasks} />
          </Card>
        </section>
      </div>
    );
  }
}
export default ListTasks;
