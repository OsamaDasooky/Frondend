import React from "react";
import HeroDetailes from "./HeroDetailes";
import Post from "./Post";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getArticles,
  getRecentArticles,
  getArticle,
} from "../../Reducers/ArticleReducer";
import { useParams } from "react-router-dom";
import { useJquery } from "../../hooks/useJquery";

export function NewsDetailes() {
  const { reloadJquery } = useJquery();
  //   const { id } = useParams();
  const dispatch = useDispatch();
  const articleDetail = useSelector((state) => state.articles.articleDetail[0]);
  const articles = useSelector((state) => state.articles.articlesData);
  const recentArticles = useSelector((state) => state.articles.recentArticles);
  useEffect(() => {
    reloadJquery();
  });

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  useEffect(() => {
    dispatch(getArticle(30));
  }, [articles]);

  useEffect(() => {
    dispatch(getRecentArticles(3));
  }, [articles]);

  if (!articleDetail) return <div> LOading ....</div>;
  return (
    <div>
      <>
        <HeroDetailes articleDetail={articleDetail} />
        <Post articleDetail={articleDetail} recentArticles={recentArticles} />
      </>
    </div>
  );
}
