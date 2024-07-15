import styled from 'styled-components';

interface MessageContainerProps {
  $isValidForm: boolean
}
interface FooterProps {
  $isSentMessage: boolean
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem;

  h1 {
    color: var(--gray-900);
    font-weight: 500;

    @media screen and (max-width: 640px) {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 640px) {
      padding: 0;
    }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;

  input {
    background: none;
    border: 1px solid var(--gray-900);
    padding: 0.75rem;
    border-radius: 4px;
    margin-bottom: 1.5rem;

    &:first-of-type {
      margin-top: 1.5rem
    }

    &::placeholder {
      text-transform: capitalize;
    }
  }


  button {
    padding: 0.5rem 2rem;
  }
`

export const Footer = styled.footer<FooterProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 1rem;

  span {
    color: ${({ $isSentMessage }) => ($isSentMessage ? "var(--green-500)" : "var(--red-400)")}
  }

  @media screen and (max-width: 640px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    width: 100%;
    margin-top: auto;
    flex-direction: column;

    span {
      text-align: center;
    }

    button {
      width: 100%;
    }
}
`

export const MessagesContainer = styled.div<MessageContainerProps>`
  min-height: 5rem;

  div {
    display: flex;
    flex-direction: column;
  }

  ul {
    padding-left: 2rem;
  }

  span, li {
    font-size: 0.75rem;
    color: ${({ $isValidForm }) => ($isValidForm ? "var(--green-500)" : "var(--red-400)")}
  }
  span + span{
    margin-top: 0.5rem;
  }

`;

