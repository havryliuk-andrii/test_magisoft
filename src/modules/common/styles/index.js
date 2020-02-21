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
    flex:2;
  }
  >:nth-child(2){
    flex:7;
  }
  color:${colors.textDark};

  @media (min-width:601px) {
    display:grid;
    grid-template:min-content min-content/ auto
  }
`

export const SimpleInput = styled.input`
  border: .2rem solid ${colors.bgDark};
  border-radius: .8rem; 
`

export const  SimpleButton = styled.button`
  border: .2rem solid ${colors.bgDark};
  border-radius: .8rem; 
` 
export const SimpleNoCornersButton = styled(SimpleButton)`
  border-radius:0;
`

export const DarkButton = styled(SimpleNoCornersButton)`
  background-color: ${colors.bgDark};
  color:${colors.white};
`

export const PrimaryButton = styled(SimpleButton)`
  background-color: ${colors.primary};
  color:${colors.white};
`