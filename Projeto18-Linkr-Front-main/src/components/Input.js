import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/userContext";

export default function InputSearch({datas}) {
  const [searchName, setSearchName] = useState("");
  const [users, setUsers] = useState([]);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  function searchUsers() {
    const search = users.map(({ photo, id, username, index }) => (
      <UserContainer
        onClick={() =>
          navigate(
            `/timeline/user/${id}`,
            { replace: true, state: {} }
          )
        }
        key={index}
      >
        <img src={photo} alt="" />
        <p>{username}</p>
      </UserContainer>
    ));
    return search;
  }

  function searchUser(event) {
    event.preventDefault();

    const auth = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    const body = {
      name: searchName,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/timeline/user`, body, auth)
      .then((resposta) => {
        setUsers(resposta.data);
      })

      .catch((erro) => console.log(erro.response.data));
  }

  return (
    <ContainerSearch displayUsers={users}>
      <Input>
        <Container>
          <input
            data-test="search"
            type="search"
            placeholder="Search for people"
            value={searchName}
            onChange={(e) => {
              setSearchName(e.target.value);
              if (searchName.length >= 3) {
                searchUser(e);
              } else {
                setUsers([]);
              }
            }}
          />
          <Button>
            <AiOutlineSearch />
          </Button>
        </Container>
      </Input>
      <UsersContainer displayUsers={users}>{searchUsers()}</UsersContainer>
    </ContainerSearch>
  );
}

const ContainerSearch = styled.div``

const Container = styled.div`
  float: left;
  width: 563px;
  height: 45px;
  position: relative;
  @media (max-width: 800px) {
    max-width: 350px;
  }
`;

const Input = styled.form`
  width: 563px;
  input {
    box-sizing: border-box;
    padding: 15px;
    border: none;
    border-radius: 8px;
    width: 563px;
    height: 45px;
    font-family: "Lato";
    font-size: 19px;
    color: #515151;
    float: left;
  }
  input::placeholder {
    font-size: 19px;
    color: #c6c6c6;
  }
  @media (max-width: 800px) {
    max-width: 350px;
    margin-top: 10px;
    position: absolute;
    left: calc(50% - 175px);
    top: 70px;
    input {
      max-width: 350px;
      font-size: 17px;
    }
    ::placeholder {
      font-size: 17px;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 9px;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  line-height: center;
  font-size: 22px;
  color: #c6c6c6;
  :hover {
    color: #515151;
  }
`;

const UsersContainer = styled.div`
  display: ${(props) =>
    props.displayUsers.length > 0 ? "flex" : "none !important"};
  flex-direction: column;
  width: 100%;
  height: 130px;
  position: absolute;
  bottom: -130px;
  padding: 14px;
  overflow-y: scroll;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #e7e7e7;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 140px;
  margin-bottom: 10px;
  margin-left: 20px;
  cursor: pointer;
  p {
    width: 100%;
  }
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    object-fit: cover;
  }
`;