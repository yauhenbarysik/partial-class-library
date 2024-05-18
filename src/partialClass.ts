export class PartialClass {
  private static applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
            Object.create(null)
        );
      });
    });
  }

  public static combine(classes: any[]) {
    class PartialClassBase {}

    this.applyMixins(PartialClassBase, classes);

    return new PartialClassBase();
  }
}
