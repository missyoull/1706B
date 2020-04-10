import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 引入路由
import {HashRouter} from 'react-router-dom'
import config from './router/router'
import RouterView from './router/RouterView'
// 引入redux
import store from './store'
import {Provider} from 'react-redux'

// 引入antd-mobile
// import 'antd-mobile/dist/antd-mobile.css';


ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
            <RouterView routes={config.routes}/>
        </React.Suspense>
    </HashRouter>
</Provider>, document.getElementById('root'));


// 重载console
console.log = function(){};