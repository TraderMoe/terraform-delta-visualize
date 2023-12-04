import { ResourceChange } from "./ResourceChange";

export interface RootPlan {
  format_version: string;
  terraform_version: string;
  resource_changes: ResourceChange[];
  timestamp: string;
}
