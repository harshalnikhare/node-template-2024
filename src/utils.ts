import config from "./config";

export function add(a: number, b: number): number {
  if (config.appDebug) {
    console.debug(`Calling add function with arguments ${a} and ${b}`);
  }
  return a + b;
}
