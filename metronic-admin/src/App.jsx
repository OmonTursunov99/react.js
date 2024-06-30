import React from "react";
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "@/app/store.js";
import router from '@/app/routes.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
