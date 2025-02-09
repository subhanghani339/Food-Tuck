import Image from "next/image";
import Link from "next/link";
import { PiArrowLineUpRight } from "react-icons/pi";
import { BlogMeta } from "./BlogMeta";
import { allBlogs } from "@/app/data/dummyData";

export const BlogPost = ({ blog, hasReadMore = true }: { blog: (typeof allBlogs)[0], hasReadMore?: boolean }) => {
  const { title, featuredImage, date, comments, user, shortDescription, slug } =
    blog;

  return (
    <div className="mb-10">
      <Image
        src={featuredImage}
        alt={title}
        width={1000}
        height={500}
        priority
      />
      <div className="max-w-3xl">
        <BlogMeta date={date} comments={comments} user={user} />
        <h3 className="text-grey-100 text-xl font-bold">{title}</h3>
        <hr className="my-6" />
        <p>{shortDescription}</p>
        {hasReadMore && <div className="text-brand-500 border border-brand-500 rounded-lg mt-4 py-2 px-8 w-max">
          <Link href={`/blog/${slug}`} className="flex items-center">
            Read More
            <PiArrowLineUpRight size={22} className="ml-2 text-brand-500" />
          </Link>
        </div>}
      </div>
    </div>
  );
};
