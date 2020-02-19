import React from 'react'
import { Logo, CompanyName, HeaderWrapper } from './styles';

const Header = (props) =>{
    return (
        <HeaderWrapper>
          <Logo/>
          <CompanyName>TRAVOLTA</CompanyName>
        </HeaderWrapper>
    )
}

export default Header