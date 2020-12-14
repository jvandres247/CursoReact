import React, { useReducer } from "react";
import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <AppRouter/>", () => {
    const user = {
        id: 1,
        name: 'Andres'
    }
  const wrapper = mount(
    <UserContext.Provider value={{user}}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("Debe mostrarse correctamente", () => {
      expect(wrapper).toMatchSnapshot();
  });
});
