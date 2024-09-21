import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${ ({ theme }) => theme.COLORS.GRAY_300};;
  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;

    color: ${ ({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    padding: 12px;
    border: 0;

    &:placeholder {
      ${ ({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;