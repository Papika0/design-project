import React from "react";
import { getCategoryPosts, getCategories } from "@/services";
import Link from "next/link";

const CategoryPost = ({ posts }) => {
  return (
    <div className="mx-24 mb-8 mt-10 ">
      <Link href="/">Logo</Link>
      <div className="flex flex-col gap-10 w-full border-black border-b mt-16">
        {posts.map((post) => (
          <div>{post.category.name}</div>
        ))}
      </div>
    </div>
  );
};
export default CategoryPost;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPosts(params.slug);

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
