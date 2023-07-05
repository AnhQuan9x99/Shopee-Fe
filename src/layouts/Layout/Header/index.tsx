import Link from "next/link";
import React from "react";
import { InfoPart } from "./InfoPart";
import { UserPart } from "./UserPart";

type Props = {
  //
};

export const Header: React.FC<Props> = () => {
  return (
    <div className="header-wrap flex justify-between w-[80%]">
      <InfoPart />
      <UserPart />
    </div>
  );
};
