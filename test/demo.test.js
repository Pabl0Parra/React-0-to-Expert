describe("Test in <DemoComponent />", () => {
  test("This test can't fail", () => {
    //1. Initialization
    const message1 = "Hello world";

    //2. What to do
    const message2 = message1.trim();

    //3. Watch behaviour
    expect(message1).toBe(message2);
  });
});
