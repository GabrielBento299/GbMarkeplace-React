import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    padding: 0 5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    margin-bottom: 3rem;

    @media screen and (max-width: 768px) {
        padding: 0 2rem;
    }

    input {
        width: 60%;
        height: 52px;
        border-radius: 12px;
        padding: 0 16px;
        font-size: 1rem;
        border: 2px solid #fff;
        outline: none;
        background-color: #fff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
        transition: all 0.2s ease-in;

        &:focus {
            border-color: #e5e5e5;
            transform: scale(1.07);
        }

        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
`;

export const ProductArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 1.5rem;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 4rem;

    .container-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 280px;
        height: 400px; 
        margin-bottom: 1rem;
        border-radius: 12px;
        padding: 20px;
        
        background-color: #FFF;
        text-align: initial;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
     }

     .container-items {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
     }
`;

export const Title = styled.strong`
    font-size: 1.125rem;
    color: #444;
    font-size: 700;
    min-height: 85px;
`;

export const Span = styled.span`
     font-weight: bold;
     font-size: 1.4rem;
`;

export const BtnGroup = styled.div`
    border: none;
    border-radius: 7px;
`;

export const Image = styled.img`
    min-width: 160px;
    max-width: 250px;
    object-fit: scale-down;
`;

