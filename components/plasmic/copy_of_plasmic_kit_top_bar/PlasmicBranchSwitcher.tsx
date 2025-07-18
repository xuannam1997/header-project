/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7XWfT73X1LW1q4kavwKvMP
// Component: 6TdOkuG3Xw78

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: SEF-sRmSoqV5c/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../plasmic_kit_design_system/plasmic.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_color_tokens/plasmic.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7XWfT73X1LW1q4kavwKvMP/projectcss
import sty from "./PlasmicBranchSwitcher.module.css"; // plasmic-import: 6TdOkuG3Xw78/css

import GitBranchSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__GitBranchSvg"; // plasmic-import: 4OBJfCUZH/icon
import ChevronDownSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__ChevronDownSvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicBranchSwitcher__VariantMembers = {};
export type PlasmicBranchSwitcher__VariantsArgs = {};
type VariantPropType = keyof PlasmicBranchSwitcher__VariantsArgs;
export const PlasmicBranchSwitcher__VariantProps = new Array<VariantPropType>();

export type PlasmicBranchSwitcher__ArgsType = {};
type ArgPropType = keyof PlasmicBranchSwitcher__ArgsType;
export const PlasmicBranchSwitcher__ArgProps = new Array<ArgPropType>();

export type PlasmicBranchSwitcher__OverridesType = {
  root?: Flex__<typeof Button>;
  svg?: Flex__<"svg">;
};

export interface DefaultBranchSwitcherProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBranchSwitcher__RenderFunc(props: {
  variants: PlasmicBranchSwitcher__VariantsArgs;
  args: PlasmicBranchSwitcher__ArgsType;
  overrides: PlasmicBranchSwitcher__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <Button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
      font={"bold"}
      startIcon={
        <GitBranchSvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      }
      type={["clear"]}
      withIcons={["endIcon", "startIcon"]}
    >
      {"Branch"}
    </Button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof Button;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBranchSwitcher__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBranchSwitcher__VariantsArgs;
    args?: PlasmicBranchSwitcher__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBranchSwitcher__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBranchSwitcher__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBranchSwitcher__ArgProps,
          internalVariantPropNames: PlasmicBranchSwitcher__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBranchSwitcher__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBranchSwitcher";
  } else {
    func.displayName = `PlasmicBranchSwitcher.${nodeName}`;
  }
  return func;
}

export const PlasmicBranchSwitcher = Object.assign(
  // Top-level PlasmicBranchSwitcher renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicBranchSwitcher
    internalVariantProps: PlasmicBranchSwitcher__VariantProps,
    internalArgProps: PlasmicBranchSwitcher__ArgProps
  }
);

export default PlasmicBranchSwitcher;
/* prettier-ignore-end */
