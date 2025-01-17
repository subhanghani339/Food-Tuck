import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { allBlogs } from "@/app/data/dummyData";
import HeaderDark from "@/app/components/Header/HeaderDark";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Footer from "@/app/components/Footer/Footer";

// Generate metadata function for dynamic blog pages
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  // Await params before using slug
  const { slug } = await params;

  const blog = allBlogs.find((b) => b.slug === slug);

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

const Page = ({ params }: any) => {
  const { slug } = params;

  console.log("slug is", slug)

  const blog = allBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <HeaderDark />
      <HeroSection heading={"Blog Details"} breadcrumb={`Blog Details`} />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default Page;
