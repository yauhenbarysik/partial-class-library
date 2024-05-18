//EXAMPLE USAGE:
//You can use it to store your partial classes (sort of) in some lets call it class library file,
//And then inherit it from here in necessary beats of code
import { PartialClass } from "../src/partialClass";
import { MotionAnimal } from "./motion/motionAnimal";
import { MotionInsect } from "./motion/motionInsect";
import { MotionHuman } from "./motion/motionHuman";

//This type below specified is just an alias to rename type for your Partial Class (MotionActions)
//You can replace "Motion" in const expression below with "MotionAnimal & MotionInsect & MotionHuman"
//But your type will be "MotionAnimal & MotionInsect & MotionHuman" in Idea/VSCode for MotionActions constant
type Motion = MotionAnimal & MotionInsect & MotionHuman;
//Your Partial Class, which then you can inherit wherever you want
export const MotionActions = PartialClass.combine([
  MotionAnimal,
  MotionInsect,
  MotionHuman,
]) as Motion;
