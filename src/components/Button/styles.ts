import styled from 'styled-components';

interface Props {
    bgColor?: string;
    widthSize?: string;
};

export const StyledButton = styled.button<Props>`
    background: rgb(0, 190, 197);
    border-radius: 7px;
    color: #fff;

    background-color: ${({bgColor}) => bgColor};
    
    border: none;
    margin-top: 5px;
    font-size: 20px;
    padding: 12px 0;
    width: ${({widthSize}) => widthSize};
    transition: all .2s;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;

    &:hover {
        filter: brightness(1.07);
        transform: scale(1.02);
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.313rem;
    }
`;