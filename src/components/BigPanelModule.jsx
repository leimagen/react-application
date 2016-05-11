var React = require('react');

var BigPanelModule = React.createClass({
    render: function(){

        var valuePositioning = {
            marginTop: 12
        }

        var captionPositioning = {
            marginTop: -15
        }

        return (
            <div className="col-sm-4 text-center">
                <h2 style={valuePositioning}>{this.props.value}</h2>
                <p style={captionPositioning}>{this.props.caption}</p>
            </div>
        );
    }
});

module.exports = BigPanelModule;
