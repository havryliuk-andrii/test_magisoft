import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';
import { TravelForm, Input, FieldInfo, Persons, Button, ButtonWrapper } from './styles';

export const Destination = ({formik, ...props}) =>{
    const [isDestinationListShown,setIsDestinationListShown] = useState(false)
    const [isTuched,setIsTuched] = useState(false)

    const handleFocus=()=>{setIsDestinationListShown(true)}
    const handleBlur=(e)=>{formik.handleBlur(e);setIsDestinationListShown(false);}
    
    return(
        <div className="DestinationWr">
            <FieldInfo>
                <label htmlFor="firstName">Destination</label>
                {formik.touched.destination && formik.errors.destination ? (
                    <div>{formik.errors.destination}</div>
                ) : null}
            </FieldInfo>
            <Input
                id="destination"
                name="destination"
                type="text"
                onChange={formik.handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                value={formik.values.destination}
            />
            {isDestinationListShown
                ?<div>___LIST___}</div>    
                :null        
            }
        </div>
    )
}

export const CheckIn = ({formik, ...props}) =>{    
    return(
        <div className="CheckIn">
            <label htmlFor="firstName">Check-in</label>
            {formik.touched.checkIn && formik.errors.checkIn ? (
                <div>{formik.errors.checkIn}</div>
            ) : null}
            <Input
                id="checkIn"
                name="checkIn"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.checkIn}
            />
        </div>
    )
}

export const CheckOut= ({formik, ...props}) =>{    
    return(
        <div className="CheckOut">
            <label htmlFor="firstName">Check-out</label>
            {formik.touched.checkOut && formik.errors.checkOut ? (
                <div>{formik.errors.checkOut}</div>
            ) : null}
            <Input
                id="checkOut"
                name="checkOut"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.checkOut}
            />
        </div>
    )
}

export const Adults = ({formik, ...props}) =>{    
    return(
        <div className="adults">
            <label htmlFor="firstName">Adults</label>
            {formik.touched.checkIn && formik.errors.adults ? (
                <div>{formik.errors.adults}</div>
            ) : null}
            <Input
                id="adults"
                name="adults"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.adults}
            />
        </div>
    )
}

export const Children = ({formik, ...props}) =>{    
    return(
        <div className="children">
            <FieldInfo>
                <label htmlFor="firstName">Children</label>
                {formik.touched.children && formik.errors.children ? (
                    <div>{formik.errors.children}</div>
                ) : null}
            </FieldInfo>
            <Input
                id="children"
                name="children"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.children}
            />
        </div>
    )
}

const initValues = {
    destination: '',
    checkIn:'',
    checkOut:'',
    adults:0,
    children:0
}
const validationSchema = Yup.object({
    destination: Yup.string()
    .oneOf(
        ['London', 'development', 'product', 'other'],
        'Invalid Job Type')
    .required('Required')
})

const submitHandler = (values) => {

}

export const BookingForm =()=>{
    const formik = useFormik({
        initialValues:initValues,
        validationSchema:validationSchema,
        onSubmit:submitHandler    
    })
    return(
        <TravelForm onSubmit={formik.handleSubmit}>
            <Destination formik={formik} />
            <CheckIn formik={formik} />
            <CheckOut formik={formik} />
            <Persons>
                <Adults formik={formik}/>
                <Children formik={formik}/>
            </Persons>
            <ButtonWrapper>
                <Button type ="submit">SEARCH</Button>
            </ButtonWrapper>
            
       </TravelForm>
    )
}