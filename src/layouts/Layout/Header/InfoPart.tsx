import { IconFacebook } from "@components/Icons/IconFacebook";
import { IconInstagram } from "@components/Icons/IconInstagram";
import Link from "next/link";
import React from "react";

export type InfoPartType = {
  label: string;
  href: string;
};
type Props = {
  //
};

export const InfoPart: React.FC<Props> = () => {
  const listInfo: InfoPartType[] = [
    {
      label: "Kênh Người Bán",
      href: "/profile",
    },
    {
      label: "Trở Thành Người Bán Shopee",
      href: "/s",
    },
    {
      label: "Tải Ứng Dụng",
      href: "/",
    },
    {
      label: "Kêt Nối",
      href: "/",
    },
  ];
  return (
    <div className="flex flex-row h-full text-[red]">
      {listInfo?.map((item :InfoPartType , key:any) => (
<Link href={item.href} key={item.label} passHref>
          <p className="text-[red]">{item.label}</p>
        </Link>
      
      ))}
    </div>
  );
};
