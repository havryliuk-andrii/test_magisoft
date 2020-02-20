import React, { useState } from 'react'
import styled from 'styled-components';
import { colors } from '../../../../constants';
import { FieldInfo, Input } from './styles';

export const Destination = ({formik,name, ...props}) =>{
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
        formik.setFieldValue(name, el);
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
                {formik.touched[name] && formik.errors[name] ? (
                    <div>{formik.errors[name]}</div>
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
                    value={formik.values[name]}
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

const DestinationWrapper = styled.div`
    position: relative;
`

const DestinationList = styled.div`
    position: absolute;
    padding:1.8rem 0;
    background-color: ${colors.white};
    border: .2rem solid ${colors.bgDark};
    border-top: none;
    border-bottom-left-radius:.8rem;
    border-bottom-right-radius:.8rem;
    margin:0 .3rem;
    width:calc(100% - .3rem);
    top:70%;
    left:0;
`

const DestinationListItem = styled.div`
    padding:1rem 0;
    padding-left:2rem;
    &:hover{
        background-color: ${colors.primary};
        color:${colors.white};
        cursor:pointer;
    }
`