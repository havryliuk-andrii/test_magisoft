import styled from "styled-components";
import { colors } from '../../../../constants';

export const DescriptionSection = styled.section`
    display: none;

    @media (min-width:725px) {
        display: block;
        font-size:4rem;
    }
`
export const DescriptionHeader=styled.div`
    font-weight: bold;
    font-size:5rem;
    margin-bottom:1rem;
`

export const DescriptionBody = styled.div`
`

export const Mark =styled.span`
    color:${colors.primary}
`