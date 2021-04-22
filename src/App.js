import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom';
import Landing from './Pages/Landing.jsx';
import SendFile from './Pages/SendFile.jsx';
import ReceiveFile from './Pages/ReceiveFile.jsx';

const App = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/send" component={SendFile} />
				<Route exact path="/receive" component={ReceiveFile} />
			</Switch>
		</HashRouter>
	)
}

export default App
