import { getImagen } from "../../base/11-async-await";

describe("Pruebas con async-await-fetch", () => {
  test("Debe retornar l ", async() => {
    const url = await getImagen();
    expect(url.includes('https://')).toBe(true);
  });
});
