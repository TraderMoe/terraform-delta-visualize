import { ResourceChange } from "./ResourceChange";

export interface RootPlan {
  format_version: string;
  terraform_version: string;
  resource_changes: ResourceChange[];
  variables: Variable;
  timestamp: string;
}

export const emptyRootPlan: RootPlan = {
  format_version: "",
  terraform_version: "",
  resource_changes: [],
  timestamp: "",
  variables: {},
};

export interface Variable {
  [key: string]: VariableValue;
}

export type VariableValue = {
  value: any;
};
