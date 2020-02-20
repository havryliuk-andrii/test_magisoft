import styled from 'styled-components';
import { colors } from '../../../constants';


export const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.bgLite};
  padding:4% 4%;
  display:flex;
  flex-direction:column;
  >:nth-child(1){
    flex:1;
  }
  >:nth-child(2){
    flex:8;
  }
  color:${colors.textDark}
`

export const SimpleInput = styled.input`
  border: .2rem solid ${colors.bgDark};
  border-radius: .8rem; 
`

export const  SimpleButton = styled.button`
  border: .2rem solid ${colors.bgDark};
  border-radius: .8rem; 
` 
export const PrimaryButton = styled(SimpleButton)`
  background-color: ${colors.primary};
  color:${colors.white};
`