var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var DataDisplayManager = require('./components/DataDisplayManager.jsx');
var DisplayComponent = require('./components/DisplayComponent.jsx');

//ReactDOM.render(<DisplayComponent title="Fuck you" />, document.getElementById('newFollowers'));
ReactDOM.render(<DataDisplayManager value="20" text="New Followers added this month" />, document.getElementById('newFollowers'));
ReactDOM.render(<DataDisplayManager value="$ 1250" text="Average monthly income" />, document.getElementById('monthlyIncome'));
ReactDOM.render(<DataDisplayManager value="$ 13865" text="Yearly income Goal" />, document.getElementById('yearlyIncome'));
