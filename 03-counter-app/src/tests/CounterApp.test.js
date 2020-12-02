import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import "../setupTest";

describe("Pruebas en <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);;

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  })

  test("Debe mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("100");
  });

  test("Debe de incrementar con el boton de +1", () => {

    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe('2');
  });

  test("Debe de decrementar con el boton de -1", () => {

    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe('0');
  });

  test('Debe hacer un reset con el boton', () => {
    const wrapper = shallow(<CounterApp value={100} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find("h2").text().trim();
    
    expect(counterText).toBe('100');
  })
  
});
