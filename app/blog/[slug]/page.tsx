import React from "react";
import { Metadata } from "next";
import { allBlogs } from "@/app/data/dummyData"; // Assuming this is where your data comes from
import HeaderDark from "@/app/components/Header/HeaderDark";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Footer from "@/app/components/Footer/Footer";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = allBlogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found - Foodtuck",
      description: "The blog you're looking for does not exist.",
      openGraph: {
        title: "Blog Not Found",
        description: "The blog you're looking for does not exist.",
        url: `https://ms-foodtuck.vercel.app/blog/${params.slug}`,
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

const Page = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <HeaderDark />
      <HeroSection
        heading={"Blog Details"}
        breadcrumb={`Blog Details`}
      />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default Page;
