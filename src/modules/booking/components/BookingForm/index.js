import React from 'react'
import formik, { Formik } from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';
import {
    TravelForm,
    Input,
    FieldInfo,
    Persons,
    Button,
    ButtonWrapper,
    DestinationList,
    DestinationWrapper,
    DestinationListItem
} from './styles';

const Destination = ({formik, ...props}) =>{
    const [isDestinationListShown,setIsDestinationListShown] = useState(false)
    const [isOverDropList,setIsOverDropList] = useState(false);
    const handleFocus=()=>{setIsDestinationListShown(true)}
    const handleBlur=(e)=>{
        if(!isOverDropList){
            formik.handleBlur(e)
            setIsDestinationListShown(false)
        }            
    }
    const handleMouseEnter =(e)=>{setIsOverDropList(true)}
    const handleMouseLeave =(e)=>{setIsOverDropList(false)}

    const setDestination =(el)=>{
        formik.setFieldValue(destination, el);
        setIsDestinationListShown(false)
        setIsOverDropList(false)
    }

    const dropList = ['London', 'Kiev', 'Moscow', 'Tokyo','Riga','Monaco'].map((el,ind)=>(
        <DestinationListItem 
            key ={ind} 
            onClick={()=>setDestination(el)}
        >
                {el}
        </DestinationListItem>
    ))
    
    return(
        <div className="destinationWr">
            <FieldInfo>
                <label htmlFor="firstName">Destination</label>
                {formik.touched.destination && formik.errors.destination ? (
                    <div>{formik.errors.destination}</div>
                ) : null}
            </FieldInfo>
            <DestinationWrapper>
                <Input
                    id="destination"
                    name="destination"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    value={formik.values.destination}
                    autocomplete='no'
                />
                {isDestinationListShown?
                    <DestinationList
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {dropList}
                    </DestinationList>    
                    :null        
                }
            </DestinationWrapper>
        </div>
    )
}

const CreateField = (formik,label,name,type)=>{
    return(
        <div>
            <FieldInfo>
                <label htmlFor="firstName">{label}</label>
                {formik.touched[name] && formik.errors[name] ? (
                    <div>{formik.errors[name]}</div>
                ) : null}
            </FieldInfo>
            <Input
                id={name}
                name={name}
                type={type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
            />
        </div>
    )
}

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
        >{(props)=>
            <TravelForm onSubmit={props.handleSubmit} >
                <Destination formik={props} />
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