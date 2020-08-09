import styled from 'styled-components';
import ButtomReactLab from '../ButtomReactLab';
import LogoReactLab from '../LogoReactLab';
import container from '../../tools/container';


export const HeaderReactLab = styled.header`
    background-color: var(--color-black-dark);
    border-bottom: 4px solid var(--color-primary-medium);
    padding: 20rem 0; 
    

    @media(max-width: 800px){        
        padding: 15rem 16rem; 
    }
`; 

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${container}; 
    
    @media(max-width: 800px){
        justify-content: center;

        & > ${LogoReactLab} {
            height: 30px;
        }

        & > ${ButtomReactLab} {
            background-color: var(--color-primary-medium);
            padding: 17px 32px;
            border-radius:0;
            border: 0;
            position: fixed;
            bottom: 0; 
            left: 0;
            width: 100vw; 
        }
    }
`;
