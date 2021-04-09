import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl";
const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  const getPost = async () => {
    const res = await fetch(`${baseUrl}/blogs/${id}`);
    const data = await res.json();
    setPost(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return post ? (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h3>{post.title}</h3>
      <p>
        By: {post.author.firstname} {post.author.lastname}
      </p>
      <small>{post.date}</small>
      <br />
      <img
        src={post.image.url}
        alt={post.title}
        style={{ width: 300, height: 300, marginTop: 20 }}
      />
      <p>{post.content}</p>
    </div>
  ) : null;
};

export default BlogPost;
