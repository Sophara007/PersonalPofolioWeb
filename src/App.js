import React from 'react';
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import Root, {ROUTES} from './components/root/Root';
import {About} from './containers/aboutme/Aboutmepage';
import {Skills} from './containers/skills/SkillsPage';
import {Home} from './components/Home/HomePage'
import { ContactPages } from './containers/contact/contactPage';


function App() {
  const router = createBrowserRouter(createRoutesFromElements( 
<Route path="/" element={<Root />}>
  <Route index element={<Home />} />
  <Route path={ROUTES.ABOUTME} element={<About />}></Route>
  <Route path={ROUTES.SKILL} element={<Skills />}/>

  <Route path={ROUTES.CONTACT} element={<ContactPages />}>
 
  </Route>
</Route>
  ));
  return (
   <RouterProvider router={router} />
  );
}

export default App;
