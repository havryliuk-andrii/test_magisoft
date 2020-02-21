import styled from 'styled-components'
import { colors } from '../../../../constants';

export const HeaderWrapper = styled.header`
    display : flex;
    justify-items: flex-start;
    align-items:center;

    @media (min-width:725px) {
      margin-bottom:3rem;
    }
`

export const Logo = styled.div`
    width: 16vw;
    height:16vw;
    background-color: ${colors.primary};
    border-radius:50%;
    @media (min-width:601px) {
      width:12rem;
      height:12rem;
    }
`

export const CompanyName = styled.div`
  text-transform:uppercase;
  font-size:6.3em;
  padding-left:3vw;
`

export const Navigation = styled.nav`
  display:none;
  
  @media (min-width:601px){
    display:block;
    margin-left:auto;
    display: flex;
    font-size:3rem;
    >*{
      margin-left:2rem;
      padding:.3rem;
      color:${colors.textDark}
    } 
  }

  @media (min-width:725px){
    font-size:3.5rem;
    >*{
      margin-left:2rem;
      padding:.5rem;
      color:${colors.textDark}
    } 
  }
`