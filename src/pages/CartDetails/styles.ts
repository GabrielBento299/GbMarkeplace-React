import styled from "styled-components";

export const Container = styled.div`
    max-width: 1150px;
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 12px;
    padding: 30px;
    margin-bottom: 4rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    overflow: auto;
`;

export const Mensagem = styled.div`
    display: flex;
    justify-content: center;
    margin: 60px auto;
  
    width: 50%;

    background: orange;
    color: #fff;

    font-size: 20px;
    font-weight: bold;
    
    border-radius: 7px;
    height: 50px;
    align-items: center;
`;

export const ProductTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    .link-detail {
        text-decoration: none;
        color: orange;

        :hover {
            text-decoration: underline;
        }
    }
`;

export const ItemsAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        gap: 2rem;
    }
`;
