var React = require('react');
var DataDisplayItem = require('./DataDisplayItem.jsx');

var DataDisplayList = React.createClass({
    render: function(){
        var createItem = function(text, index){
            return <DataDisplayItem key={index + text} text={text} />;
        };

        return (<ul>{this.props.items.map(createItem)}</ul>);
    }
});

module.exports = DataDisplayList;
