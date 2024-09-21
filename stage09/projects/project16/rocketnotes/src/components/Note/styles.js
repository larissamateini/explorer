import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 22px;
  margin-bottom: 16px;

  border: none;
  border-radius: 10px;

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 24px;
    font-weight: 700;
    color: ${ ({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;