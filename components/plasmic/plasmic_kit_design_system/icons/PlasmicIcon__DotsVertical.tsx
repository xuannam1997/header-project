/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DotsVerticalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DotsVerticalIcon(props: DotsVerticalIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 4a1.25 1.25 0 110 2.5A1.25 1.25 0 0112 4zm0 6.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm1.25 8a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DotsVerticalIcon;
/* prettier-ignore-end */
