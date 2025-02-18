import { PiUserCirclePlus } from "react-icons/pi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GoCommentDiscussion } from "react-icons/go";
import { MetaItem } from "./MetaItem";
import { formatDate } from "@/app/helpers/date";

export const BlogMeta = ({ date, comments, user }: { date: string, comments: number, user: string }) => (

  <div className="flex items-center text-sm text-grey-200 space-x-4 my-2">
    <MetaItem icon={<IoCalendarNumberOutline size={25} className="text-brand-500 mr-1" />} label={`${formatDate(date)} /`} />
    <MetaItem icon={<GoCommentDiscussion size={25} className="text-brand-500 mr-1" />} label={`${comments} Comments /`} />
    <MetaItem icon={<PiUserCirclePlus size={30} className="text-brand-500 mr-1" />} label={user} />
  </div>
);