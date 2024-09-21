import styled from "styled-components";

export const Container = styled.span`
  color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};
  font-size: 12px;
  background-color: ${ ({ theme }) => theme.COLORS.ORANGE};

  padding: 5px 14px;
  margin-right: 6px;
  border-radius: 5px;
`;