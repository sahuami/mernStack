
Question :how to use redux toolkit

1.Install Redux Toolkit and React-Redux.
npm install @reduxjs/toolkit
npm install react-redux


2.Create a slice using createSlice with initial state, actions, and reducers.
example:counterSlice.jsx file

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;





3.Configure the store with configureStore.
example:store.js file

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;






4.Wrap the app with the Provider to make the store accessible.

example:main.jsx file

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from "./redux/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
     
  </React.StrictMode>
)





5.Use useSelector to read from the store and useDispatch to modify the state. in youe component
example:counters.jsx file

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    );
};

export default Counter;
