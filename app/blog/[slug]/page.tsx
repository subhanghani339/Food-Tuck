import React from "react";
import type { Metadata } from "next";
import HeaderDark from "@/app/components/Header/HeaderDark";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Footer from "@/app/components/Footer/Footer";
import SingleBlog from "@/app/components/SingleBlog/SingleBlog";
import { getSingleBlog } from "@/app/actions/getBlogsActions";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { slug } = await params;

  const blog = await getSingleBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found - Foodtuck",
      description: "The blog you're looking for does not exist.",
      openGraph: {
        title: "Blog Not Found",
        description: "The blog you're looking for does not exist.",
        url: `https://ms-foodtuck.vercel.app/blog/${slug}`,
      },
    };
  }

  return {
    title: `${blog.title} - Foodtuck`,
    description: blog.shortDescription,
    openGraph: {
      title: blog.title,
      description: blog.shortDescription,
      images: [blog.featuredImage],
      url: `https://ms-foodtuck.vercel.app/blog/${blog.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.shortDescription,
      images: [blog.featuredImage],
    },
  };
}

const Page = async ({ params }: any) => {
  const { slug } = await params;

  const blog = await getSingleBlog(slug);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <HeaderDark />
      <HeroSection heading={"Blog Details"} breadcrumb={`Blog Details`} />
      <SingleBlog singleBlog = {blog} />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default Page;