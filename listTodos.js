import React from 'react';

const ListTodosApp = React.createClass({
    handleDelete(value) {
        this.props.detleteToDo(value);
    },
    render() {
        let result = this.props.listOfTodos.map((item, index) => {
            return (<li key={index}>
                {item.description}
                <button onClick={this.handleDelete.bind(this, item)}>Delete</button>
            </li>);
        });
        return(<div>
            <h5>Todos</h5>
            <ul>
                {result}
            </ul>
          </div>);
    }
});

export default ListTodosApp;
