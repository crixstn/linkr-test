import styled from "styled-components";

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
