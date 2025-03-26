import styled from "styled-components";

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 305px;
  height: 405px;
  background-color: #171717;
  box-sizing: border-box;
  border-radius: 16px;
  border: none;
  margin-top: 107px;
  margin-left: 20px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Header = styled.header`
  font-family: "oswald", sans-serif;
  color: white;
  font-size: 27px;
  font-weight: 700;
  padding: 9px 16px;
`;

export const Line = styled.hr`
  width: 300px;
  border: 1px solid #484848;
  background-color: red;
`;