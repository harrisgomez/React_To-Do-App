import React from 'react';
import CreateToDo from './create-todo';
import ToDosList from './todos-list';

// create fake data
const todos = [
    // {
    //     task: 'go to gym',
    //     isCompleted: false
    // },
    // {
    //     task: 'shop for gifts',
    //     isCompleted: true
    // }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos // es6's shorthand syntax of todos: todos
        }
    }

    render() {
        return (
            <div>
                <h1>React To-Do App</h1>
                <CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                <ToDosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        // console.log(foundTodo);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) { // push new tasks into todos array
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos }); // re-renders the page and only renders what's different (pushed tasks)
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}
