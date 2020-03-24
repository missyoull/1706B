import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {HashRouter} from 'react-router-dom'
import config from './router/router'
import RouterView from './router/RouterView'

ReactDOM.render(<HashRouter>
    <RouterView routes={config.routes}/>
</HashRouter>, document.getElementById('root'));