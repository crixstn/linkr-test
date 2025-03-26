import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TimelineLayout, Timeline } from "./styled";
import UserContext from "../../contexts/userContext";
import Post from "../../components/PostComponent.js/Post";
import Header from "../../components/Header";
import NewPost from "../../components/NewPost/NewPost";
import axios from "axios";

export default function TimelinePage() {
  const [posts, setPosts] = useState([]);
  const { token, setToken, setPhoto, setName } = useContext(UserContext);
  const navigate = useNavigate();
  setToken(localStorage.getItem("authToken"));

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    if (posts === "") {
      getPosts();
    }
  }, []);

  async function getPosts() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/timeline`,
        config
      );
      setPosts(result.data.metadataPosts);
      setPhoto(result.data.userInfo?.picture_url);
      setName(result.data.userInfo?.username);
    } catch (error) {
      console.log(error);
    }
  }

  function showPosts() {
    if (posts.length > 0) {
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
          like,
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
            likes={like}
            creatorId={userId}
            setPosts={setPosts}
            getPosts={getPosts}
          />
        )
      );
      return timeline;
    }
    if (posts.length === 0) {
      return <span>There are no posts yet</span>;
    }
  }

  return (
    <TimelineLayout>
      <Header />
      <Timeline>
        <h1>Timeline</h1>
        <NewPost getPosts={getPosts} />
        {showPosts()}
      </Timeline>
    </TimelineLayout>
  );
}
