import styled from 'styled-components';
import { colors } from '../../../constants';


export const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.bgLite};
  padding:4% 4%;
  display:grid;
  grid-template: auto 1fr / auto;
`