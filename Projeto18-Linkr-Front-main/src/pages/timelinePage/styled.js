import styled from "styled-components";

export const TimelineLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #333333;
  position: relative;
  padding-top: 150px;
  overflow: auto;
`;

/*-----HEADER-----*/

export const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  height: 72px;
  width: 100%;
  background-color: #151515;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  h1 {
    font-family: "Passion One", cursive;
    color: #ffffff;
    font-size: 49px;
    letter-spacing: 0.05em;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  ion-icon {
    font-size: 25px;
    color: #ffffff;
  }
  img {
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
  }
`;

/*-----TIMELINE-----*/
export const Timeline = styled.main`
  flex-direction: column;
  display: flex;
  width: 30%;
  width: 611px;
  h1 {
    margin-top: 150px;
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    line-height: 64px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 45px;
    letter-spacing: 0.03em;
  }
  h2 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
  }
  @media (max-width: 630px) {
    width: 100%;
    h1 {
      margin: 91px 0 19px 17px;
      font-size: 33px;
      line-height: 49px;
    }
    h2 {
      font-size: 20px;
    }
  }
`;

export const Publish = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  background-color: #ffffff;
  padding: 20px;
  gap: 18px;
  margin-bottom: 30px;
  img {
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 13px;
    p {
      font-size: 20px;
      line-height: 24px;
      color: #707070;
      font-weight: 300;
      font-family: "Lato", sans-serif;
    }
  }
  @media (max-width: 630px) {
    text-align: center;
    padding: 12px;
    border-radius: 0;
    margin-bottom: 16px;
    img {
      display: none;
    }
    div {
      p {
        line-height: 20px;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 8px;

  input {
    width: 100%;
    background: #efefef;
    border-radius: 5px;
    font-family: "Lato";
    font-size: 15px;
    color: #151515;
    border: none;
    padding: 6px 13px;
    outline: none;
    &::placeholder {
      color: #949494;
      font-weight: 300;
    }
  }
  input:nth-child(1) {
    height: 30px;
  }
  input:nth-child(2) {
    height: 66px;
  }
  button {
    width: 112px;
    height: 31px;
    background: #1877f2;
    border-radius: 5px;
    text-align: center;
    border: none;
    font-family: "Lato";
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }
  @media (max-width: 630px) {
    input:nth-child(2) {
      height: 47px;
    }
    button {
      height: 22px;
    }
  }
`;
