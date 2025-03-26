import axios from "axios";
import React, { useContext } from "react";
import { HashtagContext } from "../../AppContext/hashtagContext";
import { ContainerHashtag, LinkContainer } from "./style";

const Hashtags = (props) => {
  const { body } = props;
  const { setHashtag } = useContext(HashtagContext)

  function handleClick(hashtag) {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`)
    promise.then(res => {
      const { data } = res
      setHashtag(data)
    }).catch(err => {
      alert('Problemas no servidor, tente novamente')
    })
  }

  return (
    <ContainerHashtag>
      {body.map((elm, i) => (
        <LinkContainer to={`/hashtag/${elm.name}`} data-test="hashtag" onClick={() => handleClick(elm.name)} key={elm.name}>
          <p key={i}>
            <span>#</span> <span>{elm.name}</span>
          </p>
        </LinkContainer>
      ))}
    </ContainerHashtag>
  );
};

export default Hashtags;