import React from 'react'
import { BookingFormContainer } from './containers/BooingFormContainer';
import { TravelDescription } from './components/TravelDescription';

const BookingPage = (props) =>{
    return (
      <main className="bookingPage">
        <BookingFormContainer/>
        <TravelDescription/>
      </main>        
    )
}

export default BookingPage