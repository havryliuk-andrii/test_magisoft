import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup'
import {
    TravelForm,
    Persons,
    Button,
    ButtonWrapper,
} from './styles';
import { CreateField } from './CreateField';
import { Destination } from './Destination';


const [destination,checkIn,checkOut,adults,children] =
    ['destination','checkIn','checkOut','adults','children']

const initValues = {
    [destination]: '',
    [checkIn]:'',
    [checkOut]:'',
    [adults]:0,
    [children]:0
}

export const BookingForm =({submitHandler})=>{    
    
    const validationSchema = Yup.object({
        [destination]: Yup.string()
            .oneOf(
            ['London', 'Kiev', 'Moscow', 'Tokyo','Riga','Monaco'],
                'Invalid Destination')
                .required('Required'),
                
        [adults]:Yup.number()
            .min(1,'Minimum 1')
            .required('Required'),
            
        [children]:Yup.number()
            .min(0,'Invalid Number')
            .required('Required'),
            
        [checkIn]:Yup.date()
            .min(new Date(),'Invalid Past Date')
            .required('Required'),
            
        [checkOut]:Yup.date()
                .min(Yup.ref(checkIn),"Must be later than chek-in")
                .required('Required')        
    })

    return(
        <Formik
            initialValues={initValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
        >{props=>
            <TravelForm onSubmit={props.handleSubmit} >
                <Destination formik={props} name={destination} />
                {CreateField(props,'Chek-in',checkIn,'date')}
                {CreateField(props,'Chek-out',checkOut,'date')}
                <Persons>
                    {CreateField(props,'Adults',adults,'number')}
                    {CreateField(props,'Children',children,'number')}
                </Persons>
                <ButtonWrapper>
                    <Button type ="submit">SEARCH</Button>
                </ButtonWrapper>
            </TravelForm>
        }
        </Formik>
    )
}