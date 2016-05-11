var React = require('react');

var DisplayComponent = React.createClass({
    render: function(){
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
});

module.exports = DisplayComponent;
