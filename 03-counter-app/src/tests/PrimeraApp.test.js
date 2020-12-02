import React from "react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";
import "../setupTest";

describe("Pruebas en <PrimeraApp />", () => {
  test("Debe mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola, soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Goku";
    const subTitulo = 'Mira mamá, soy un subtitulo';
    const wrapper = shallow(
      <PrimeraApp
        saludo={saludo}
        subtitulo={subTitulo} />
    );

    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subTitulo);
  });
});
