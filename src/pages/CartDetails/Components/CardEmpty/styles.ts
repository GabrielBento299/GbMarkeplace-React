import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 950px) {
        width: 80%;
    }

    div {
        display: flex;
        justify-content: center;
        font-size: 55px
    }
    

    h1 {
        font-size: 2rem;
        color: #333;
        font-weight: bold;

        @media screen and (max-width: 650px) {
            font-size: 1.5rem;
        }
    }

    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.6rem;
        color: blue;

        transition: all .4s ease;

        :hover {
            transform: scale(1.07);
        }
        @media screen and (max-width: 650px) {
            font-size: 1rem;
        }
    }
`;
