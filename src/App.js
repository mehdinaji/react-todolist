import React from 'react';
import axios from 'axios';
import ListTasks from './components/ListTasks/ListTasks';
import TaskListContext from './context/getList-context';
import Container from '@material-ui/core/Container';

class App extends React.Component {
  state = {
    tasks: [],
    loading: true,
  };

  addTask = task => {
    axios
      .post('/tasks', task)
      .then(res => {
        const newTasks = [...this.state.tasks];
        newTasks.push(res.data);
        this.setState({ tasks: newTasks });
      })
      .catch(err => {
        console.log('#ERR', err);
      });
  };

  editTask = task => {
    axios
      .put(`/tasks/${task.id}`, task)
      .then(res => {
        const taskIndex = this.state.tasks.findIndex(t => t.id == task.id);
        const newTasks = [...this.state.tasks];
        newTasks[taskIndex] = task;
        this.setState({ tasks: newTasks });
      })
      .catch(err => console.log('#ERR', err));
  };

  deleteTask = taskId => {
    axios
      .delete(`/tasks/${taskId}`)
      .then(res => {
        const taskIndex = this.state.tasks.findIndex(t => t.id == taskId);
        const newTasks = [...this.state.tasks];
        newTasks.splice(taskIndex, 1);
        this.setState({ tasks: newTasks });
      })
      .catch(err => console.log('#ERR', err));
  };

  componentDidMount() {
    axios
      .get('/tasks')
      .then(res => {
        this.setState({ tasks: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: 'ERROR' });
      });
  }

  render() {
    const styles = {
      Container: {
        width: 530,
      }
    };
    return (
      <div>
        <TaskListContext.Provider
          value={{
            task: this.state.tasks,
            addTask: this.addTask,
            editTask: this.editTask,
            deleteTask: this.deleteTask,
            loading: this.state.loading,            
          }}
        >
          <Container style={styles.Container}>
            <ListTasks />
          </Container>
        </TaskListContext.Provider>
      </div>
    );
  }
}

export default App;
