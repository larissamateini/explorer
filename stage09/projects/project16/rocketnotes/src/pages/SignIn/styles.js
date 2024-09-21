import styled from "styled-components";
import backgroundImage from '../../assets/background-sign.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  text-align: center;
  padding: 0 136px;

  > h1 {
    font-size: 48px;
    color: ${ ({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    color: ${ ({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
  }

  > a {
    color: ${ ({ theme }) => theme.COLORS.ORANGE};
    margin-top: 124px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${ backgroundImage }) no-repeat center center;
  background-size: cover;
`;