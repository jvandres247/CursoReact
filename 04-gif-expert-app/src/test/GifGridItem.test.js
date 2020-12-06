import { shallow } from "enzyme";
import { GifGridItem } from "../components/GifGridItem";
import React from "react";
import "../setupTests";

describe("Pruebas en <GifGridItem/>", () => {
  const title = "Titulo Test";
  const url = "https://localhost.com/imagen.png";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe mostrar <GifGridItem /> correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener un parrafo con el titulo', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
