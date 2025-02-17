"use server";

import { client as sanityClient } from "@/sanity/lib/client";

export async function getBlogs(searchQuery?: string) {
  try {
    const query = searchQuery
      ? `*[_type == "blog" && title match $searchQuery + "*"] | order(date desc) {
            _id,
            title,
            "slug": slug.current,
            shortDescription,
            "featuredImage": featuredImage.asset->url,
            date,
            "user": user->name,
            "commentsCount": coalesce(count(comments), 0)
          }`
      : `*[_type == "blog"] | order(date desc) {
            _id,
            title,
            "slug": slug.current,
            shortDescription,
            "featuredImage": featuredImage.asset->url,
            date,
            "user": user->name,
            "commentsCount": coalesce(count(comments), 0)
          }`;

    const blogs = sanityClient.fetch(query, searchQuery ? { searchQuery } : {});
    return blogs;
  } catch (error) {
    console.log("Error fetching blogs", error);
    return [];
  }
}

export async function getSingleBlog(slug: string) {
  try {
    const query = `*[_type == "blog" && slug.current == $slug][0] {
            _id,
            title,
            "slug": slug.current,
            shortDescription,
            "featuredImage": featuredImage.asset->url,
            date,
            "user": user->name,
              "commentsCount": coalesce(count(comments), 0)
          }`;

    const blog = sanityClient.fetch(query, { slug });
    return blog;
  } catch (error) {
    console.log("Error fetching blog", error);
    return [];
  }
}
