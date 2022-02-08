import React from "react";
import { BlogItem } from "../components";
import { blogItem } from "../db";

function Blog() {
  return (
    <BlogItem
      blogTitle={blogItem[0].blogTitle}
      blogText={blogItem[0].blogText}
    />
  );
}

export default Blog;
