import React from 'react';

class TaskManager extends React.Component {
    constructor(props) {
      super(props);
      this.state = {tasks: []};
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  
    handleSubmit(event) {
        let task = document.querySelector('#name')
        var joined = this.state.tasks.concat([task.value]);
        this.setState({ tasks: joined })
        alert('A task was Added: ' + task.value);
        event.preventDefault();
    }
  
    render() {
        const list = this.state.tasks.map((item, i) => {
            return <li key={i}>{item}</li>
          });
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Enter Task:
                <input id = 'name' type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Add" />
            </form>
            <ul>
                {list}
            </ul>
        </div>
      );
    }
  }

export default TaskManager;