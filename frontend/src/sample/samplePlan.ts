import { RootPlan } from "../types/RootPlan";
import jsonPlan from "./sample.json";

export const SamplePlan: RootPlan = JSON.parse(JSON.stringify(jsonPlan));