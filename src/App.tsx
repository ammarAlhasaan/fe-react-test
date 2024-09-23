import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./routes";

import './styles/index.scss';
import { Provider } from 'react-redux'
import store from "_redux/store";

function App() {
  return (
    <div className="light-theme">
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
