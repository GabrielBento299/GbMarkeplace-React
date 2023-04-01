import { ReactNode } from 'react';

import { Container } from './styles';
import magniferQuestionImg from '../../../../assets/img/magnifier-question.svg';

export default function EmptySearch({inputSearch} : {inputSearch: ReactNode}) {
    return (
        <Container>
        <img src={magniferQuestionImg} alt="Magnifer Question" />

        <span>Nenhum resultado foi encontrado para <strong>"{inputSearch}"</strong> </span>
      </Container>    
    )
}