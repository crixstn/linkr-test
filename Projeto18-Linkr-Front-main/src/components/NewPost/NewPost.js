import { Publish, Form } from "./styled.js";
import { useState, useContext, useEffect } from "react";
import UserContext from "../../contexts/userContext";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function NewPost(getPosts) {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [posts, setPosts] = useState("");
  const { photo, token } = useContext(UserContext);
  console.log(photo);
  console.log(token);
  const [formClear, setFormClear] = useState(false);
  console.log("1");
  async function handleSubmit(e) {
    console.log("2");
    e.preventDefault();
    setLoading(true);
    try {
      console.log("3");
      const post = {
        url,
        posts,
      };
      console.log("4");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("5");
      await axios.post(
        `${process.env.REACT_APP_API_URL}/timeline`,
        post,
        config
      );
      console.log("6");
      await getPosts();
      console.log("7");
      setLoading(false);
      setUrl("");
      setPosts("");
    } catch (err) {
      console.log("8");
      alert("There was an error publishing your link");
      setLoading(false);
      console.log(err.response.data);
    }
  }
  console.log("9");
  useEffect(() => {
    console.log("10");
    if (formClear) {
      console.log("11");
      setPosts("");
      setFormClear(false);
    }
  }, [formClear]);
  console.log("12");
  if (posts === undefined) {
    console.log("13");
    return <ThreeDots type="ThreeDots" color="#FFF" height={13} />;
  }
  console.log("14");
  return (
    <Publish data-test="publish-box">
      <img src={photo} alt="" />
      <div>
        <p>What are you going to share today?</p>
        <Form onSubmit={handleSubmit}>
          <input
            data-test="link"
            type="url"
            placeholder="http:// ..."
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={loading}
            required
          />
          <input
            data-test="description"
            type="text"
            placeholder="Awesome article about #javascript"
            name="post_text"
            maxLength={300}
            value={posts}
            onChange={(e) => setPosts(e.target.value)}
            disabled={loading}
          />
          <button data-test="publish-btn">
            {loading === true ? "Publishing..." : "Publish"}
          </button>
        </Form>
      </div>
    </Publish>
  );
}
