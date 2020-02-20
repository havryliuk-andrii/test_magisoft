import React from 'react';
import styled from 'styled-components'
import { SimpleInput } from '../modules/common/styles';
import { colors } from '../constants';

export const SimpleField = (formik,label,name,type)=>{
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

const FieldInfo = styled.div`
    display:flex; 
    > :nth-child(2){
        margin-left:2rem;
        color:${colors.danger};
        font-size:2.8rem;
        display: flex;
        align-items:flex-end;
    }
`

const Input = styled(SimpleInput)`
    margin: 1.5rem .3rem;
    width:calc(100% - .3rem);
    height:5rem;
    padding-left:2rem;
`