import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import {robots} from './Components/robots';//As its not default
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App robots={robots}/>, document.getElementById('root'));
registerServiceWorker();
