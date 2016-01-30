import React from 'react';
import AddTodoApp from 'addTodo.js';
import ListTodosApp from 'listTodos.js';
import EmptyMessage from 'emptyMessage.js';

const TodoApp = React.createClass({
    getInitialState() {
        return {
            listOfTodos: []
        };
    },
    detleteToDo(todo){
        let newList = this.state.listOfTodos;

        newList.forEach(function(item, index, object) {
            if (item.id === todo.id) {
                object.splice(index, 1);
            }
        });
        this.setState({
            listOfTodos: newList
        });
    },
    addToDo(description) {
        let newList = this.state.listOfTodos;
        let newId = newList.length + 2;

        newList.push({ description: description, id: newId });

        this.setState({
            listOfTodos: newList
        });
    },
    render() {
        return(<div>
            <EmptyMessage listOfTodos={this.state.listOfTodos}/>
            <ListTodosApp listOfTodos={this.state.listOfTodos} detleteToDo={this.detleteToDo} />
            <AddTodoApp addToDo={this.addToDo} />
            </div>);
    }
});

export default TodoApp;
