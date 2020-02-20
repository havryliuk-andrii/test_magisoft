import styled from 'styled-components';
import { SimpleInput, PrimaryButton } from '../../../common/styles';
import { colors } from '../../../../constants';

export const TravelForm = styled.form`
    padding-top:4rem;
    display: grid;
    grid-template: repeat(5,minmax(0,1ft)) / auto;
    font-size:4rem;
   
`
export const FieldInfo = styled.div`
    /* display:flex; */

    /* > :nth-child(2){
        margin-left:2rem;
        color:${colors.danger}
    } */
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

export const Input = styled(SimpleInput)`
    margin: 1.5rem .3rem;
    width:calc(100% - .3rem);
    height:5rem;
`
export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-end
`
export const Button = styled(PrimaryButton)`
    height:13vw;
`