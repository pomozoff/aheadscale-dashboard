import { cn } from "@utils/helpers";
import Image from "next/image";
import * as React from "react";
import AheadscaleMark from "@/assets/aheadscale-mark.png";

type Props = {
  size?: "default" | "large";
  mobile?: boolean;
};

const sizes = {
  default: {
    desktop: 22,
    mobile: 30,
  },
  large: {
    desktop: 24,
    mobile: 40,
  },
};

export const NetBirdLogo = ({ size = "default", mobile = true }: Props) => {
  return (
    <>
      <span
        className={cn(
          "items-center gap-2 font-semibold tracking-tight text-white",
          mobile ? "hidden md:inline-flex" : "inline-flex",
        )}
      >
        <Image
          src={AheadscaleMark}
          width={sizes[size].desktop + 8}
          height={sizes[size].desktop + 8}
          alt=""
          aria-hidden="true"
        />
        <span style={{ fontSize: sizes[size].desktop }}>Aheadscale</span>
      </span>
      {mobile && (
        <Image
          src={AheadscaleMark}
          width={sizes[size].mobile}
          alt={"Aheadscale Logo"}
          className={cn(mobile && "md:hidden ml-4")}
        />
      )}
    </>
  );
};
