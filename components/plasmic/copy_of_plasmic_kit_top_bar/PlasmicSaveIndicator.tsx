/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7XWfT73X1LW1q4kavwKvMP
// Component: 1RVwRnrTGJeX

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

import plasmic_plasmic_kit_design_system_deprecated_css from "../plasmic_kit_design_system/plasmic.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_color_tokens/plasmic.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7XWfT73X1LW1q4kavwKvMP/projectcss
import sty from "./PlasmicSaveIndicator.module.css"; // plasmic-import: 1RVwRnrTGJeX/css

createPlasmicElementProxy;

export type PlasmicSaveIndicator__VariantMembers = {
  saveState: "dirty" | "unlogged";
};
export type PlasmicSaveIndicator__VariantsArgs = {
  saveState?: SingleChoiceArg<"dirty" | "unlogged">;
};
type VariantPropType = keyof PlasmicSaveIndicator__VariantsArgs;
export const PlasmicSaveIndicator__VariantProps = new Array<VariantPropType>(
  "saveState"
);

export type PlasmicSaveIndicator__ArgsType = {};
type ArgPropType = keyof PlasmicSaveIndicator__ArgsType;
export const PlasmicSaveIndicator__ArgProps = new Array<ArgPropType>();

export type PlasmicSaveIndicator__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultSaveIndicatorProps {
  saveState?: SingleChoiceArg<"dirty" | "unlogged">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSaveIndicator__RenderFunc(props: {
  variants: PlasmicSaveIndicator__VariantsArgs;
  args: PlasmicSaveIndicator__ArgsType;
  overrides: PlasmicSaveIndicator__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "saveState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.saveState
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootsaveState_dirty]: hasVariant($state, "saveState", "dirty"),
          [sty.rootsaveState_unlogged]: hasVariant(
            $state,
            "saveState",
            "unlogged"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxsaveState_dirty]: hasVariant(
            $state,
            "saveState",
            "dirty"
          ),
          [sty.freeBoxsaveState_unlogged]: hasVariant(
            $state,
            "saveState",
            "unlogged"
          )
        })}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSaveIndicator__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSaveIndicator__VariantsArgs;
    args?: PlasmicSaveIndicator__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSaveIndicator__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSaveIndicator__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSaveIndicator__ArgProps,
          internalVariantPropNames: PlasmicSaveIndicator__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSaveIndicator__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSaveIndicator";
  } else {
    func.displayName = `PlasmicSaveIndicator.${nodeName}`;
  }
  return func;
}

export const PlasmicSaveIndicator = Object.assign(
  // Top-level PlasmicSaveIndicator renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicSaveIndicator
    internalVariantProps: PlasmicSaveIndicator__VariantProps,
    internalArgProps: PlasmicSaveIndicator__ArgProps
  }
);

export default PlasmicSaveIndicator;
/* prettier-ignore-end */
