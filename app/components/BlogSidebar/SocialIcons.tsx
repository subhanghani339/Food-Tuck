import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

interface SocialIconsProps {
  size?: number;
  color?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ size = 20, color = "#333333" }) => (
  <div className="flex justify-center gap-3 mt-8">
    <FaFacebook size={size} color={color} className="cursor-pointer" />
    <FaTwitter size={size} color={color} className="cursor-pointer" />
    <FaInstagram size={size} color={color} className="cursor-pointer" />
    <FaPinterest size={size} color={color} className="cursor-pointer" />
  </div>
);

export default SocialIcons;
