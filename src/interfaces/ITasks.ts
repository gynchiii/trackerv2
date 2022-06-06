import IProject from "./IProject";

export default interface ITasks {
  durationInSeconds: number,
  description: string,
  project: IProject
}