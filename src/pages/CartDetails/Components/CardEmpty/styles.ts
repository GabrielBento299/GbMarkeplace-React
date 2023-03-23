import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    div {
        display: flex;
        justify-content: center;
        
        font-size: 55px
    }

    h1 {
        font-size: 2rem;
        color: #333;
        font-weight: bold;
    }

    p {
        font-size: 1.2rem;
        font-weight: 600;
    }
`;
