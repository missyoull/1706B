import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
// 引入路由
import config from './router/router.config';
import RouterView from './router/RouterView';
// 引入store
import store from './store'

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
