import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { App }  from 'components/App';
import { store, persistor } from 'redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>

      {/* check if it need to use basename in BrowserRouter: */}
      <BrowserRouter  basename="/goit-react-hw-08-phonebook">  

        <Provider store={store}>
          <App />
        </Provider>
        
      </BrowserRouter>
    </PersistGate> 
  </React.StrictMode>
);
