import React from 'react';

const AddTodoApp = React.createClass({
    getInitialState() {
        return {
            description: null
        };
    },
    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    },
    addTodo(e) {
        e.preventDefault();
        this.props.addToDo(this.state.description);
    },
    render() {
        return(<form>
            <h5>Lägg till todo</h5>
            <input type="text" value={this.state.description} onChange={this.handleDescriptionChange}></input>
            <input type="submit" value="Skapa" onClick={this.addTodo}></input>
          </form>);
    }
});

export default AddTodoApp;
