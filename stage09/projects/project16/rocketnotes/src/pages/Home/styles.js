import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container= styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};
  border-bottom: 1px solid ${ ({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    color: ${ ({ theme }) => theme.COLORS.ORANGE};
    font-size: 24px;
  }
`;

export const Menu = styled.ul`
  grid-area: menu;

  text-align: center;
  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 64px;

  > li {
    margin-bottom: 24px;
  }
`;

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`;

export const Content = styled.div`
  grid-area: content;

  padding: 0 64px;
  overflow-y: auto;
`;

export const NewNote= styled(Link)`
  grid-area: newnote;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${ ({ theme }) => theme.COLORS.ORANGE};

  svg {
    margin-right: 8px;
  }
`;