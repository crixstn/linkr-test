import styled from "styled-components";
import Header from "../components/Header";
import Post from "../components/PostComponent.js/Post.js";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import TrendingTopics from "../components/TrendingComponents/TrendingComponents.js";
import UserContext from "../contexts/userContext";

export default function User() {
  const [posts, setPosts] = useState("");
  const [trending, setTrending] = useState("");
  const { id } = useParams();
  const { token, setToken } = useContext(UserContext);
  const [followed, setFollowed] = useState("");
  const [myPage, setMyPage] = useState(true);
  const navigate = useNavigate();
  setToken(localStorage.getItem("authToken"));

  useEffect(() => {
    console.log("1");
    getPosts();
    getFollow();
    console.log("2");

    function getPosts() {
      if (!token) {
        navigate("/");
      }
      getTrending();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .get(`${process.env.REACT_APP_API_URL}/timeline/user/${id}`, config)
        .then((resposta) => {
          console.log(resposta.data);
          setPosts([...posts, ...resposta.data]);
        })
        .catch((erro) => console.log(erro.response.data));
    }
  });

  async function getTrending() {
    console.log("3");
    try {
      console.log("4");
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/trending`
      );
      setTrending(result.data);
    } catch (erro) {
      alert("An error has occurred");
      console.log(erro);
    }
  }

  async function getFollow() {
    setMyPage(true);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/followed/${id}`,
        config
      );
      const { userId, message } = result.data;

      if (userId !== Number(id)) {
        setMyPage(false);
      }
      setFollowed(message);
    } catch (erro) {
      alert("An error has occurred");
      console.log(erro);
    }
  }

  function loadPosts() {
    if (posts) {
      const timeline = posts.map(
        ({
          id,
          username,
          photo,
          url,
          post,
          title,
          image,
          description,
          userId,
        }) => (
          <Post
            key={id}
            name={username}
            photo={photo}
            url={url}
            text={post}
            title={title}
            image={image}
            description={description}
            user={userId}
            post={id}
          />
        )
      );
      return timeline;
    }
  }
  async function follow() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const body = {
        followedId: id,
      };
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/follow`,
        body,
        config
      );
      getFollow();
    } catch (erro) {
      alert("An error has occurred");
      console.log(erro);
    }
  }

  return (
    <TimelineContainer>
      <Header />
      <Main>
        <Timeline>
          <PostsContainer>
            <p>{posts[0].username + "'s posts"}</p>
            {loadPosts()}
          </PostsContainer>
          <ContainerButton user={!myPage}>
            <Button user={!myPage}>
              {myPage} ? ("") : (
              <ButtonFollow followed={followed} onClick={follow}>
                {" "}
                {followed}{" "}
              </ButtonFollow>
              )
            </Button>
          </ContainerButton>
          <TrendingContainer>
            <TrendingTopics />
          </TrendingContainer>
        </Timeline>
      </Main>
    </TimelineContainer>
  );
}

const TimelineContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #333333;
  span {
    font-weight: 700;
    font-size: 43px;
    color: white;
  }
`;

const Main = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1060px) {
    margin-top: 42px;
  }
`;

const Timeline = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PostsContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    display: flex;
    justify-content: left;
    width: 100%;
    font-weight: 700;
    font-size: 43px;
    color: white;
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: left;
  }
  @media only screen and (max-width: 1060px) {
    width: 100%;
    h2 {
      margin-top: 70px;
      padding-left: 28px;
    }
    div {
      border-radius: 0;
    }
  }
`;

const ContainerButton = styled.div`
  margin-top: ${(props) => (props.user === true ? "50px" : "141px")};
  width: 301px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media only screen and (max-width: 1060px) {
    h2 {
      width: 100%;
      padding-left: 22px;
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 1060px) {
    display: none;
  }
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonFollow = styled.div`
  height: 31px;
  width: 112px;
  border-radius: 5px;
  border: 0;
  background-color: ${(props) => props.followed === "Follow" ? "#1877f2" : "#FFFFFF"};
  pointer-events: ${(props) => (props.disabled ? "none" : "normal")};
  font-family: Lato;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  color: ${(props) => (props.followed === "Follow" ? "#FFFFFF" : "#1877f2")};
  margin-bottom: 60px;
`;

const TrendingContainer = styled.div`
  margin-top: 93px;
  width: 20%;
  display: flex;
  margin-left: 25px;
  @media only screen and (max-width: 1060px) {
    h2 {
      width: 100%;
      padding-left: 22px;
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 1060px) {
    display: none;
  }
`;
