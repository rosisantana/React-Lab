import styled from 'styled-components';
import container from '../../tools/container';
import TagReactLab from '../TagReactLab';
import TitleReactLab from '../TitleReactLab';
import ThumbReactLab from '../ThumbReactLab';


export const Text = styled.div`
    padding-top: 10rem;
    max-width: 45%;

    ${TagReactLab} {
        margin-bottom: 40rem;
    }

    ${TitleReactLab} {
        margin-bottom: 20rem; 
    }
`; 

export const BannerReactLab = styled.section`
    ${container};
    display: flex;
    justify-content: space-between;
    align-items: flex-center;
    max-height: 70vh;
    height: 100vh;
`; 

