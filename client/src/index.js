import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import EquipmentStore from './store/EquipmentStore';
import './assets/style.css';
<script src="https://kit.fontawesome.com/4ce6f4727b.js" crossorigin="anonymous"></script>

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    equipment: new EquipmentStore(),
  }}>
    <App />
  </Context.Provider>
);
