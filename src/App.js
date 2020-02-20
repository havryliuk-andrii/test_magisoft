import React from 'react';
import {AppWrapper} from './modules/common/styles'
import Header from './modules/common/header';
import { BookingFormContainer } from './modules/booking/containers/BooingFormContainer';

function App() {
  return (
    <AppWrapper>
      <Header />
      <BookingFormContainer/>
    </AppWrapper>
  );
}

export default App;