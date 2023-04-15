import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as authService from './services/authService';
import * as itemService from './services/itemService';
import { Catalog } from './components/Catalog/Catalog';

import { AuthContext } from './contexts/AuthContext';
import { Profile } from './components/Profile/Profile';
import { CreateItem } from './components/CreateItem/CreateItem';
import { ItemDetails } from './ItemDetails/ItemDetails';
import { ItemContext } from './contexts/ItemContext';
import { Edit } from './components/Edit/Edit';

function App() {
  //states
  const [auth, setAuth] = useState({});
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  //get items
  useEffect(() => {
    itemService.getAll()
      .then(result => {
        setItems(result);
      })
  }, []);

  //post Login
  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate('/catalog');

    } catch (err) {
      alert(err.message);
    }
  };
  //post Register
  const onRegisterSubmit = async (values) => {
    const { repass, ...registerData } = values;

    if (repass !== registerData.password) {
      alert('Passwords do not match!');
      console.log('Passwords do not match!');
      return;
    }
    try {
      const result = await authService.register(registerData);
      setAuth(result);
      console.log(result);
      navigate('/catalog');

    } catch (err) {
      console.log(err);
    }
  };

  //on Create ItemSubmit
  const onCreateItemSubmit = async (data) => {
    const newItem = await itemService.create(data, auth.accessToken);
    setItems(state => [...state, newItem]);
    navigate('/catalog');
  };

  //on Edit Submit
  const onEditSubmit = async (data) => {
    const editedItem = await itemService.edit(data, auth.accessToken);
    const newState = items.filter(x => x._id !== editedItem._id);
    console.log(newState);
    //setItems(state => [, editedItem]);
    navigate('/catalog');
  };

 
  const contextValues = {
    isAuthenticated: !!auth.accessToken,
    userEmail: auth.email,
    userId: auth._id
  };
  const itemContextValues = {
    items
  }

  return (
    <AuthContext.Provider value={contextValues}>
      <Header />
      <Navbar />
      <div id="box" style={{ margin: "30px" }}>
        <main id="main-content">
          <ItemContext.Provider value={itemContextValues}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path={`${auth._id}/profile`} element={<Profile />} />
              <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
              {/* <Route path='/logout' element={<Logout />} /> */}
              <Route path='register' element={<Register onRegisterSubmit={onRegisterSubmit} />} />

              <Route path='/catalog' element={<Catalog  />} />
              <Route path='/create' element={<CreateItem onCreateItemSubmit={onCreateItemSubmit} />} />
              <Route path='/catalog/:itemId' element={<ItemDetails />} />
              <Route path='/catalog/:itemId/edit' element={<Edit onEditSubmit={onEditSubmit} />} />
            </Routes>
          </ItemContext.Provider>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
