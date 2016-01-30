import React from 'react';

const App = React.createClass({
    propTypes: {
        counterStart: React.PropTypes.number
    },
    getInitialState() { return { counter: 0 }; },
    resetCounter() { this.setState({ counter: 0 }); },
    componentDidMount() {
        this.setState({ counter: this.props.counterStart });
        setInterval(() => {
            this.setState({ counter: this.state.counter+1 });
        }, 1000);
    },
    render() {
        return (<div> <h1>{this.state.counter}</h1>
          <button onClick={this.resetCounter}>Reset</button></div>);
    }
});

export default App;
