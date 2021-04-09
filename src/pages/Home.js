import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/baseUrl";
const Home = () => {
  const [posts, setPosts] = useState([]);

  const getBlogPosts = async () => {
    const res = await fetch(`${baseUrl}/blogs`);
    const data = await res.json();
    setPosts(data);
  };
  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {posts.map((post) => (
          <div key={post.id}>
            <Link to={`/blog/${post.id}`}>
              <img
                src={post.image.url}
                alt={post.title}
                style={{ width: 200, height: 200 }}
              />
              <h3>{post.title}</h3>
            </Link>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
