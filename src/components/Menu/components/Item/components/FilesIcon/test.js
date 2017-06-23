import React from "react";
import {mount, shallow} from "enzyme";
import Icon from "./";

it("renders glow filter when item is active", () => {
  const iconComponent = mount(<Icon isActive={true} />);
  expect(iconComponent.hasClass("menu__icon--active")).toBe(true);
  expect(iconComponent.find("filter").exists()).toBe(true);
});

it("renders no glow filter when item is not active", () => {
  const iconComponent = mount(<Icon isActive={false} />);
  expect(iconComponent.hasClass("menu__icon--active")).toBe(false);
  expect(iconComponent.find("filter").exists()).toBe(false);
});
