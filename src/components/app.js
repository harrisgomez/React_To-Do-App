import React from 'react';

// create fake data
const todos = [
    {
        task: ' go to gym',
        isCompleted: false
    },
    {
        task: 'shop for gifts',
        isCompleted: true
    }
];

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React To-Do App</h1>
            </div>
        );
    }
}
