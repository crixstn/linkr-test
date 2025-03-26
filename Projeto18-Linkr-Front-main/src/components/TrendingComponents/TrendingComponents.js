import React, { useContext, useEffect, useState } from "react";
import { TrendingContainer, Header, Line } from "./style";
import Hashtags from "../Hashtags/Hashtags";
import axios from "axios";

const TrendingTopics = () => {
  const [body, setBody] = useState([])
  // Insert here request to backend, where back with informations about that hashtag
  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/hashtag`)
    promise.then((res) => {
      const { data } = res
      setBody(data)
    }
    ).catch((err) => {
      console.log(err)
      alert('Erro interno no servidor')
    }
    )
  }, [])

  return (
    <TrendingContainer data-test="trending">
      <Header>trending</Header>
      <Line />
      <Hashtags body={body} />
    </TrendingContainer>
  );
};

export default TrendingTopics;
