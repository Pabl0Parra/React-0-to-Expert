import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un héroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe de retornar undefined si no existe", () => {
    const id = 121;
    const hero = getHeroeById(id);

    // this works but it doesn´t look to good
    expect(hero).toEqual(undefined);

    // better like this (evaluates if it is null, undefined or false)
    expect(hero).toBeFalsy();
  });

  // TAREA:
  // getHeroesByOwner
  // Debe de retornar un arreglo con los héroes de DC
  test("getHeroesByOwner debe de retornar un array con los héroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    // Lenght === 3
    expect(heroes.length).toBe(3);
    // toEqual al arreglo filtrado
    expect(heroes).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);
    // this way is much better,
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  // debe de retornar un arreglo con los héroes de Marvel
  test("getHeroesByOwner debe de retornar un array con los héroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    // lenght = 2
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
