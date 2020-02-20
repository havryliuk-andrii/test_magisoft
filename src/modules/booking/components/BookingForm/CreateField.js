import React from 'react'
import { Input, FieldInfo } from './styles';


export const CreateField = (formik,label,name,type)=>{
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