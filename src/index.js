import './index.css';  // Removed duplicate import
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// The rerender function is used to re-render the tree whenever the state changes
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

// Initial render of the application
rerenderEntireTree(store.getState());

// Subscribe to state changes and re-render when the state updates
store.subscribe(() => rerenderEntireTree(store.getState()));
