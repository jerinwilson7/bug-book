import { UserAvatar } from "@/components/atoms";
import { formatRelativeDate } from "@/lib/utils";
import { PostData } from "@/types";
import Link from "next/link";
import React from "react";

interface PostProps {
  post: PostData;
}

export const Post = ({ post }: PostProps) => {
  return (
    <article className="space-y-3 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex flex-wrap gap-3 items-center">
        <Link href={`/user/${post.user.username}`}>
          <UserAvatar avatarUrl={post.user.avatarUrl} />
        </Link>
        <div>
          <Link
            href={`/user/${post.user.username}`}
            className="block font-medium hover:underline"
          >
            {post.user.username}
          </Link>
          <Link
            href={`/posts/${post.id}`}
            className="block text-sm text-muted-foreground hover:underline"
          >
            {formatRelativeDate(post.createdAt)}
          </Link>
        </div>
      </div>
      <div className="whitespace-pre-line break-words">{post.content}</div>
    </article>
  );
};
