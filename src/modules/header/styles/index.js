import styled from 'styled-components'
import { colors } from '../../../constants';

export const HeaderWrapper = styled.header`
    display : flex;
    justify-items: flex-start;
    align-items:center;
`

export const Logo = styled.div`
    width: 16vw;
    height:16vw;
    background-color: ${colors.primary};
    border-radius:50%;
`

export const CompanyName = styled.div`
  text-transform:uppercase;
  font-size:6.3em;
  padding-left:3vw;
`