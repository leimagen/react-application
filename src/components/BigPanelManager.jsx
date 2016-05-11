var React = require('react');
var BigPanelModule = require('./BigPanelModule.jsx');

var BigPanelManager = React.createClass({
    render: function(){

        var items = [
            { "value": 15080, "caption": "Shot Views" },
            { "value": 12000, "caption": "Likes" },
            { "value": 5100,  "caption": "Comments" }
        ]

        var divStyle = {
            height: 150
        }

        var panelHeading = {
            backgroundColor: "pink",
            height: 200
        }

        if(this.props.headingColor){
            panelHeading.backgroundColor = this.props.headingColor
        }

        var panelBody = {
            color: "white",
            backgroundColor: "#484d4d",
            height: "auto"
        }

        var panelModule = items.map(function(item){
            return <BigPanelModule value={item.value} caption={item.caption} />
        });

        return (
            <div className="panel panel-default" style={divStyle}>
                <div style={panelHeading}>

                </div>
                <div className="panel-body" style={panelBody}>
                    {panelModule}
                </div>
            </div>
        );
    }
});

module.exports = BigPanelManager;
