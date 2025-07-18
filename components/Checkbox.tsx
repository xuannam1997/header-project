import * as React from "react";
import {
  PlasmicCheckbox,
  DefaultCheckboxProps
} from "./plasmic/plasmic_kit_design_system/PlasmicCheckbox";

import { CheckboxRef } from "@plasmicapp/react-web";

export interface CheckboxProps extends DefaultCheckboxProps {
  // Feel free to add any additional props that this component should receive
}
function Checkbox_(props: CheckboxProps, ref: CheckboxRef) {
  const { plasmicProps, state } = PlasmicCheckbox.useBehavior<CheckboxProps>(
    props,
    ref
  );
  return <PlasmicCheckbox {...plasmicProps} />;
}

const Checkbox = React.forwardRef(Checkbox_);

export default Object.assign(
  Checkbox,

  {
    __plumeType: "checkbox",
    __plasmicFormFieldMeta: { valueProp: "isChecked" }
  }
);
