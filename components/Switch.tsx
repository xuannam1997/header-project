import * as React from "react";
import {
  PlasmicSwitch,
  DefaultSwitchProps
} from "./plasmic/plasmic_kit_design_system/PlasmicSwitch";

import { SwitchRef } from "@plasmicapp/react-web";

export interface SwitchProps extends DefaultSwitchProps {
  // Feel free to add any additional props that this component should receive
}
function Switch_(props: SwitchProps, ref: SwitchRef) {
  const { plasmicProps, state } = PlasmicSwitch.useBehavior<SwitchProps>(
    props,
    ref
  );
  return <PlasmicSwitch {...plasmicProps} />;
}

const Switch = React.forwardRef(Switch_);

export default Object.assign(
  Switch,

  {
    __plumeType: "switch",
    __plasmicFormFieldMeta: { valueProp: "isChecked" }
  }
);
