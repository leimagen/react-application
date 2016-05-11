var React = require('react');

var DataDisplayItem = React.createClass({
    render: function(){
        var headingStyle = {
            color: "#4d4d4d"
        }

        var paragraphStyle = {
            color: "#a3a3a3"
        }

        return (
            <div>
                <h2 style={headingStyle}><strong>{this.props.value}</strong></h2>
                <p style={paragraphStyle}>{this.props.text}</p>
            </div>
        );
    }
});

module.exports = DataDisplayItem;
