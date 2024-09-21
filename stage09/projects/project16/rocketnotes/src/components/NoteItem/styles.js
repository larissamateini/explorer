import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  color: ${ ({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${ ({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_900};

  padding-right: 16px;
  margin-bottom: 8px;
  border: ${ ({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none" };
  border-radius: 10px;

  > button {
    background: none;
    border: none;
  }

  .button-add {
    color: ${ ({ theme }) => theme.COLORS.ORANGE};
  }

  .button-delete {
    color: ${ ({ theme }) => theme.COLORS.RED};
  }

  > input {
    width: 100%;
    height: 56px;

    color: ${ ({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    padding: 12px;
    border: none;

    &::placeholder {
      color: ${ ({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;