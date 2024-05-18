//EXAMPLE USAGE:
// You can use it to store your partial classes (sort of) in some lets call it class library file,
// and then inherit it from here in necessary beats of code
import { PartialClass } from "../src/partialClass";
import { MotionAnimal } from "./motion/motionAnimal";
import { MotionInsect } from "./motion/motionInsect";
import { MotionHuman } from "./motion/motionHuman";

//MotionActions partial class
type Motion = MotionAnimal & MotionInsect & MotionHuman;
export const MotionActions = PartialClass.combine([
  MotionAnimal,
  MotionInsect,
  MotionHuman,
]) as Motion;
