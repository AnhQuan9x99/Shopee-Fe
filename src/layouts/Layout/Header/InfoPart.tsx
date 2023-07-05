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
      href: "/",
    },
    {
      label: "Trở Thành Người Bán Shopee",
      href: "/",
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
    <div className="flex justify-between">
      {/* {listInfo.map((item: InfoPartType) => {
        <Link href={item.href}>
          <a>{item.label}</a>
        </Link>;
      })} */}
      heello
    </div>
  );
};
