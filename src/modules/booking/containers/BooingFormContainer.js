import React from 'react';
import { api } from '../../../api';
import { BookingForm } from '../components/BookingForm';

export const BookingFormContainer = ()=> {
    const submitHandler = (values) => {
        api.sendBooking(values)
    }
    return <BookingForm submitHandler={submitHandler}/>
}