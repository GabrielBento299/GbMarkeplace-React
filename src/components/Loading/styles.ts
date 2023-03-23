import styled, { keyframes} from 'styled-components'

export const frame = keyframes`
  0% {
    height: 10em;
  }

  50% {
    height: 5em;
  }

  100% {
    height: 10em;
  }
`

export const LoadContainer = styled.div`
  background-color: #F6F5FC;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 750px;
  gap: 50px;

  div {
    background-color: crimson;
    height: 10em;
    width: 2em;
    animation: ${frame} 1.5s linear infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;