import styled from 'styled-components';
import ButtomReactLab from '../ButtomReactLab';
import LogoReactLab from '../LogoReactLab';


const HeaderReactLab = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rem 30rem;
    background-color: var(--color-black-dark);
    border-bottom: 4px solid var(--color-primary-medium);

    @media(max-width: 800px){
        justify-content: center;
        padding: 15px 16px; 

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

export default HeaderReactLab;