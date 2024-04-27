import { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf.js";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const userId = useSelector((state) => state?.auth?.userData?.$id);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts(userId).then((posts) => {
      if (posts) {
        setPosts(posts?.documents);
      }
    });
  }, []);

  if (!userId || posts.length === 0) {
    return (
      <div className="w-full text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="h-72 items-center flex justify-center text-2xl lg:text-4xl font-bold text-gray-800 hover:text-gray-600">
                {!userId
                  ? "Please login to see the posts"
                  : "No posts found, create one!"}
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/2 lg:w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
