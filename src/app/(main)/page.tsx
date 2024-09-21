import { Post, PostEditor } from "@/components/organisms";
import prisma from "@/lib/prisma";
import { postDataInclude } from "@/types";

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: postDataInclude,
    orderBy:{createdAt:"desc"}
  });
  return (
    <main className="w-full min-w-0">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor/>
        {posts.map((post)=>(
          <Post key={post.id} post={post}/>
        ))}
      </div>
    </main>
  );
}
