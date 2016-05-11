var React = require('react');
var DataDisplayItem = require('./DataDisplayItem.jsx');

var DataDisplayManager = React.createClass({
    render: function(){
        var divStyle = {
            height: 200,
            marginTop: 20,
            paddingTop: 40,
            paddingLeft: 20,
            paddingRight: 30
        }

        return (
            <div className="panel panel-default" style={divStyle}>
                <DataDisplayItem value={this.props.value} text={this.props.text} />
            </div>
        );
    }
});

module.exports = DataDisplayManager;
