import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PurchaseList from 'components/user/PurchaseList';
import UserInfo from 'components/user/UserInfo';
import UserPage from 'pages/UserPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<UserPage />}>
          <Route path="info" element={<UserInfo />} />
          <Route path="purchase" element={<PurchaseList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
