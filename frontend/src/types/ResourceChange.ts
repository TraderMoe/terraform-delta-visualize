import { Change } from "./Change";

export interface ResourceChange {
  address: string;
  mode: string;
  type: string;
  name: string;
  provider_name: string;
  change: Change;
}

