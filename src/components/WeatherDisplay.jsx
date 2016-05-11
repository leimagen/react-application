var React = require('react');

var WeatherDisplay = React.createClass({
    render: function(){
        var divStyle = {
            height: 200,
            marginTop:20,
            paddingTop:40,
            backgroundColor: "#ffb732",
            color: "white",
            textAlign: "center"
        }
        return (
            <div className="panel panel-default" style={divStyle}>
                <h1>{this.props.temperature}&#176;</h1>
                <p>{this.props.city}</p>
            </div>
        );
    }
});

module.exports = WeatherDisplay;
