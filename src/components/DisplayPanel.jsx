var React = require('react');

var DisplayPanel = React.createClass({
    render: function(){
        var divStyle = {
            height: 150,
            color: "white"
        }

        var panelHeading = {
            backgroundColor: "black"
        }

        var textPositioning = {
            marginTop: 12
        }

        var dataPositioning = {
            marginTop: -15
        }

        if(this.props.headingColor){
            panelHeading.backgroundColor = this.props.headingColor
        }

        return (
            <div className='panel panel-default' style={divStyle}>
                <div class="panel-heading" style={panelHeading}>
                    <div className="container">
                        <p style={textPositioning}><small>{this.props.text}</small></p>
                        <h1 style={dataPositioning} class="panel-title"><strong>{this.props.data}</strong></h1>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = DisplayPanel;
