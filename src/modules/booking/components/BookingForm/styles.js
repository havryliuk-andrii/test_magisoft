import styled from 'styled-components';
import { SimpleInput, PrimaryButton } from '../../../common/styles';
import { colors } from '../../../../constants';
import { Form } from 'formik';

export const TravelForm = styled(Form)`
    padding-top:4rem;
    display: grid;
    grid-template: repeat(5,minmax(0,1ft)) / auto;
    font-size:4rem;
   
`

export const Input = styled(SimpleInput)`
    margin: 1.5rem .3rem;
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
`


export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-end
`
export const Button = styled(PrimaryButton)`
    height:13vw;
`