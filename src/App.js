import React from 'react';
import {AppWrapper} from './modules/common/styles'
import Header from './modules/common/header';
import { BookingForm } from './modules/booking/components/BookingForm';

function App() {
  return (
    <AppWrapper>
      <Header />
      <BookingForm/>
    </AppWrapper>
  );
}

export default App;