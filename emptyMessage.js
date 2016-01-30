import React from 'react';

const EmptyMessage = React.createClass({
    render() {
        if(this.props.listOfTodos.length === 0){
            return(<h2>You need more to do. Add them as fast as possile!
              </h2>);
        }

        return null;

    }
});

export default EmptyMessage;
