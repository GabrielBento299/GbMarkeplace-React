import styled from "styled-components";

export const ContainerHeader = styled.div`    
    width: 100%;
    height: 6rem;
    background-image: linear-gradient(to right, #00b4db, #0083b0);
    margin-bottom: 4rem;
    padding: 0 6rem;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    display: flex;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 568px) {
            flex-direction: column;
            justify-content: center;
            gap: 0.785rem;
            align-items: inherit;
        }
    }

    a {
        text-decoration: none;
        font-size: 1.5rem;
        color: #EEE;
        display: flex;
        gap: 7px;
        align-items: center;


        @media screen and (max-width: 568px) {
            gap: 1rem;
            font-size: 1.2rem;
        }
            
        &:hover {
            color: #FFF;
        }
    }
`;

export const ItemsLinks = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Icon = styled.div`
    display: flex;
    flex-direction: column-reverse;

    span {
        color: rgb(204, 204, 204);
        font-size: 0.785rem;
        font-weight: bold;
        margin-top: 0.2rem;
    }
`;