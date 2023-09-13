import React from 'react'
import {Outlet} from 'react-router-dom';
import NavBar from './NavbarPanel';
import { Provider } from 'react-redux';
import store from '../slice/store';

export default function RouteLayout() {
  return (
    <>
    <Provider store={store}>
       <NavBar />
        <main>
            <Outlet />
        </main>
        </Provider>
    </>
  )
}
