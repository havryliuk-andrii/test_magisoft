import styled from 'styled-components';
import { SimpleInput, PrimaryButton } from '../../../common/styles';
import { colors } from '../../../../constants';
import { Form } from 'formik';

export const TravelForm = styled(Form)`
    padding-top:0rem;
    display: grid;
    grid-template: repeat(5,minmax(0,1ft)) / auto;
    font-size:4rem;
    height:100%;
   
    @media (min-width:601px) {
        padding-top:2rem;
    }
    
   @media (min-width:725px) {
    margin-bottom:10rem;
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr 1fr 1fr;
    margin-top:0rem;
    background-color: ${colors.white};
    border: .2rem solid ${colors.bgDark};
    >*{
        flex:1;
    }
    >*:first-child{
        margin-left:1.1rem;
    }
   }
`

export const Input = styled(SimpleInput)`
    margin: .7rem .3rem;
    width:calc(100% - .3rem);
    height:5rem;
    padding-left:2rem;
`

export const FieldInfo = styled.div`
    display:flex; 
    > :nth-child(2){
        margin-left:2rem;
        color:${colors.danger};
        font-size:2.8rem;
        display: flex;
        align-items:flex-end;
    }

    @media (min-width:725px) {
        margin-top:2rem;
        >:nth-child(2){
            display: none;
        }
    }
`

export const DesktopError = styled.div`
    display:none;
    
    @media (min-width:725px) {
        display: block;
        color:${colors.danger};
        font-size:2.8rem;
        padding:.6rem;
        padding-top:0;
        padding-bottom:1rem;
    }

`

export const Persons = styled.div`
    display:grid;
    grid-template: 1fr/ 1fr 1fr;
    > :first-child{
        margin-right:2rem;
    }
    > :last-child{
        margin-left:2rem;
    }

    @media (min-width:725px) {
        display: grid;
        >:last-child,>*:first-child{
            margin:0;
            grid-template: 1fr 1fr/1fr;
        }
    }
`


export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-end;

    @media (min-width:601px) {
        display: flex;
        padding-top:auto;
        flex-direction:row;
        align-items:flex-start;
        justify-content:flex-end;
    }
`
export const Button = styled(PrimaryButton)`
    height:13vw;
    
    @media (min-width:601px) {
        margin-top:4.8rem;
        margin-right:1.1rem;
        margin-left:1.1rem;
        width:calc(100% - .3rem);
        height:5rem;
    }
`