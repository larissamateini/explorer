import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    color: ${ ({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;

    padding-bottom: 16px;
    margin-bottom: 28px;
    border-bottom: 1px solid ${ ({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;