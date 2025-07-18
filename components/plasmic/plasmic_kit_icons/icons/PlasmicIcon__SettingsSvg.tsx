/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsSvgIcon(props: SettingsSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={
          "M13.12 5.613a1 1 0 00-.991-.863h-.258a1 1 0 00-.99.863l-.087.632c-.056.403-.354.724-.732.874a5.225 5.225 0 00-.167.07c-.373.163-.81.15-1.136-.095l-.308-.23a1 1 0 00-1.307.092l-.188.188a1 1 0 00-.092 1.307l.23.308c.244.325.258.763.095 1.136a5.225 5.225 0 00-.07.167c-.15.378-.47.676-.874.732l-.632.087a1 1 0 00-.863.99v.258a1 1 0 00.863.99l.632.087c.403.056.724.354.874.732l.07.167c.163.373.15.81-.095 1.136l-.23.308a1 1 0 00.092 1.307l.188.188a1 1 0 001.307.093l.308-.231c.325-.244.763-.258 1.136-.095a5.4 5.4 0 00.167.07c.378.15.676.47.732.874l.087.632a1 1 0 00.99.863h.258a1 1 0 00.99-.863l.087-.632c.056-.403.354-.724.732-.874a5.12 5.12 0 00.167-.07c.373-.163.81-.15 1.136.095l.308.23a1 1 0 001.307-.092l.188-.188a1 1 0 00.093-1.307l-.231-.308c-.244-.325-.258-.763-.095-1.136l.07-.167c.15-.378.47-.676.874-.732l.632-.087a1 1 0 00.863-.99v-.258a1 1 0 00-.863-.99l-.632-.087c-.403-.056-.724-.354-.874-.732a5.168 5.168 0 00-.07-.167c-.163-.373-.15-.81.095-1.136l.23-.308a1 1 0 00-.092-1.307l-.188-.188a1 1 0 00-1.307-.092l-.308.23c-.325.244-.763.258-1.136.095a5.185 5.185 0 00-.167-.07c-.378-.15-.676-.47-.732-.874l-.087-.632z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={"M13.25 12a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"}
      ></path>
    </svg>
  );
}

export default SettingsSvgIcon;
/* prettier-ignore-end */
