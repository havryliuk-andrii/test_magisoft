import React from 'react';
import {AppWrapper} from './modules/common/styles'
import Header from './modules/common/header';
import { BookingFormContainer } from './modules/booking/containers/BooingFormContainer';
import { Route } from 'react-router';
import BookingPage from './modules/booking';

function App() {
  return (
    <AppWrapper>
      <Header />
      <Route path='/' component={BookingPage}/>
    </AppWrapper>
  );
}

export default App;