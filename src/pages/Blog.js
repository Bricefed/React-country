import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Articles from "../components/Articles";

const Blog = () => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [messError, setMessError] = useState(false);
  const [blogData, setBlogData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setBlogData(res.data));
  };

  useEffect(() => getData(), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 140) setMessError(true);
    else {
      axios.post("http://localhost:3004/articles", {
        author,
        content,
        date: Date.now(),
      });
      setMessError(false);
      setContent("");
      setAuthor("");
      getData();
    }
  };

  return (
    <div className="blog-container">
      <Navigation />
      <h1>Blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          style={{ border: messError && "1px solid red" }}
          placeholder="Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {messError && <p>Le message doit faire au moins 140 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => b.date - a.date)
          .map((article) => {
            return <Articles key={article.id} article={article} />;
          })}
      </ul>
    </div>
  );
};

export default Blog;
