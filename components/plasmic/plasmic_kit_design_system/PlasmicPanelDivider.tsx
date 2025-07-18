/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXkSR39sgCDWSitZxC5xFV
// Component: 0NaTcyuAGK2dN

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_color_tokens/plasmic.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicPanelDivider.module.css"; // plasmic-import: 0NaTcyuAGK2dN/css

createPlasmicElementProxy;

export type PlasmicPanelDivider__VariantMembers = {};
export type PlasmicPanelDivider__VariantsArgs = {};
type VariantPropType = keyof PlasmicPanelDivider__VariantsArgs;
export const PlasmicPanelDivider__VariantProps = new Array<VariantPropType>();

export type PlasmicPanelDivider__ArgsType = {};
type ArgPropType = keyof PlasmicPanelDivider__ArgsType;
export const PlasmicPanelDivider__ArgProps = new Array<ArgPropType>();

export type PlasmicPanelDivider__OverridesType = {
  panelDivider?: Flex__<"div">;
};

export interface DefaultPanelDividerProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPanelDivider__RenderFunc(props: {
  variants: PlasmicPanelDivider__VariantsArgs;
  args: PlasmicPanelDivider__ArgsType;
  overrides: PlasmicPanelDivider__OverridesType;
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
    <div
      data-plasmic-name={"panelDivider"}
      data-plasmic-override={overrides.panelDivider}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.panelDivider
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  panelDivider: ["panelDivider"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  panelDivider: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPanelDivider__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPanelDivider__VariantsArgs;
    args?: PlasmicPanelDivider__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPanelDivider__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPanelDivider__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPanelDivider__ArgProps,
          internalVariantPropNames: PlasmicPanelDivider__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPanelDivider__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "panelDivider") {
    func.displayName = "PlasmicPanelDivider";
  } else {
    func.displayName = `PlasmicPanelDivider.${nodeName}`;
  }
  return func;
}

export const PlasmicPanelDivider = Object.assign(
  // Top-level PlasmicPanelDivider renders the root element
  makeNodeComponent("panelDivider"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPanelDivider
    internalVariantProps: PlasmicPanelDivider__VariantProps,
    internalArgProps: PlasmicPanelDivider__ArgProps
  }
);

export default PlasmicPanelDivider;
/* prettier-ignore-end */
