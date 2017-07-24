import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute,browserHistory}from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Content from "./pages/Content";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import Resume from "./pages/Resume";
import Nonono from "./pages/Nonono";

ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Content}></IndexRoute>
			<Route path="/user" component={User}></Route>
			<Route path="/seach" component={Search}></Route>
			<Route path="/nonono" component={Nonono}></Route>
		</Route>
		<Route path="/login" component={Login}></Route>
		<Route path="/register" component={Register}></Route>
		<Route path="/resume" component={Resume}></Route>
	</Router>),
	document.getElementById('root'));
registerServiceWorker();
