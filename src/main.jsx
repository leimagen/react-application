var React = require('react');
var ReactDOM = require('react-dom');
var DataDisplayManager = require('./components/DataDisplayManager.jsx');
var DisplayPanel = require('./components/DisplayPanel.jsx');
var WeatherDisplay = require('./components/WeatherDisplay.jsx');
var BigPanelManager = require('./components/BigPanelManager.jsx');

//ReactDOM.render(<DisplayComponent title="Fuck you" />, document.getElementById('newFollowers'));
ReactDOM.render(<DataDisplayManager value="20" text="New Followers added this month" />, document.getElementById('newFollowers'));
ReactDOM.render(<DataDisplayManager value="$ 1250" text="Average monthly income" />, document.getElementById('monthlyIncome'));
ReactDOM.render(<DataDisplayManager value="$ 13865" text="Yearly income Goal" />, document.getElementById('yearlyIncome'));

ReactDOM.render(<BigPanelManager headingColor="#0096d0" />, document.getElementById('big1'));
ReactDOM.render(<BigPanelManager headingColor="#cd59ae" />, document.getElementById('big2'));

ReactDOM.render(<WeatherDisplay temperature="18" city="Paris" />, document.getElementById('weather'));

ReactDOM.render(<DisplayPanel text="New visitors" data="1.5k" headingColor="#0096d0" />, document.getElementById('newVisitors'));
ReactDOM.render(<DisplayPanel text="Bounce Rate" data="50%" headingColor="#b28ad6" />, document.getElementById('bounceRate'));
ReactDOM.render(<DisplayPanel text="Searches" data="28%" headingColor="#ff4826" />, document.getElementById('searches'));
ReactDOM.render(<DisplayPanel text="Traffic" data="140.5 kb" headingColor="#63c254" />, document.getElementById('traffic'));
