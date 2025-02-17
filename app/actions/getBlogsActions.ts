'use server'

import { client as sanityClient } from "@/sanity/lib/client";

export async function getBlogs() {
    try {
        const query = `*[_type == "blog"] | order(date desc) {
            _id,
            title,
            "slug": slug.current,
            shortDescription,
            "featuredImage": featuredImage.asset->url,
            date,
            "user": user->name,
              "commentsCount": coalesce(count(comments), 0)
          }`;

        const blogs = sanityClient.fetch(query);
        return blogs;

    } catch (error) {
        console.log("Error fetching blogs", error)
        return []
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
        console.log("Error fetching blog", error)
        return []
    }
}
