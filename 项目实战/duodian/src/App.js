import React from 'react';

// 引入路由
import {BrowserRouter} from 'react-router-dom'
import config from './router/router.config'
import RouterView from './router/RouterView'

// 引入store
import {Provider} from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterView routes={config.routes}></RouterView>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
