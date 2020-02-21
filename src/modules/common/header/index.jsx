import React from 'react'
import { Logo, CompanyName, HeaderWrapper, Navigation } from './styles';
import { DarkButton } from '../styles';
import {NavLink} from 'react-router-dom'
const Header = (props) =>{
    return (
        <HeaderWrapper>
          <Logo as={NavLink} to='/' />
          <CompanyName as={NavLink} to='/'>TRAVOLTA</CompanyName>
          <Navigation>
            <DarkButton as={NavLink} to='/aboutUs'>About Us</DarkButton>
            <DarkButton as={NavLink} to='/myBookings'>MyBookings</DarkButton>
            <DarkButton as={NavLink} to='/singIn'>Sing-in</DarkButton>  
          </Navigation>          
        </HeaderWrapper>
    )
}

export default Header