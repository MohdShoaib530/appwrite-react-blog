import { useSelector } from "react-redux";
import appwriteService from "../appwrite/conf.js";
import { Container, PostCard } from "../components";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AllPosts() {
  const [loading, setLoading] = useState(false);
  const userId = useSelector((state) => state.auth.userData?.$id);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setLoading(true);
    appwriteService.getPosts(userId).then((res) => {
      if (res) {
        console.log("res", res);
        setPosts(res?.documents);
        setLoading(false);
        toast.success("Posts fetched successfully");
      }
    });
  }, []);
  return !loading ? (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  ) : (
    <div className="h-screen text-center flex items-center justify-center text-xl lg:text-3xl">
      Please Wait...
    </div>
  );
}

export default AllPosts;
