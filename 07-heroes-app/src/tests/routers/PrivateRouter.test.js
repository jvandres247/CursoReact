import { PrivateRouter } from "../../routers/PrivateRouter";
import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

describe("Prueba en <PrivateRouter/>", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("Debe mostrar el componente si esta autenticado y guardar localStorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRouter
          isAuthenticated={true}
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(true);
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')
  });

  test('Debe de bloquear el componente si no esta auntenticado', () => {
    const wrapper = mount(
        <MemoryRouter>
          <PrivateRouter
            isAuthenticated={false}
            component={() => <span>Listo!</span>}
            {...props}
          />
        </MemoryRouter>
      );
      expect(wrapper.find('span').exists()).toBe(false);
      expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')
  })
});
