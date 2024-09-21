import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  color: ${ ({ theme }) => theme.COLORS.WHITE};
  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};

  padding: 16px;
  margin-bottom: 8px;
  border-radius: 10px;

  border: none;
  resize: none;

  &::placeholder {
    color: ${ ({ theme }) => theme.COLORS.GRAY_300};
  }
`;