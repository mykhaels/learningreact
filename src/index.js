import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LeaderBoard from './Leaderboard';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<LeaderBoard />, document.getElementById('content'));
registerServiceWorker();
