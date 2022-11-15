import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("should return a string and a number", () => {
    const [letters, numbers] = retornaArreglo();

    // testing exact letters & numbers
    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    // testing typeof ? letters & numbers
    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    //this way we gain flexibility, it will take any string, not like line 7 that will only take "ABC"
    expect(letters).toEqual(expect.any(String));
  });
});
