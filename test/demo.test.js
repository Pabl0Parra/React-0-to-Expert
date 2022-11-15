test("This test can't fail", () => {
  if (0 === 1) {
    throw Error("This number cannot be divided it");
  }
});
