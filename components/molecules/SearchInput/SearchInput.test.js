import React from "react";
import renderer, { act } from "react-test-renderer";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  const handleSearch = jest.fn();

  it("should render correctly", () => {
    let component;

    act(() => {
      component = renderer.create(
        <SearchInput handleSearch={handleSearch} searchQuery="" />
      );
    });

    const instance = component.root;
    const textInput = instance.findByType("TextInput");

    expect(textInput).toBeDefined();
  });

  it("should call handleSearch function on text change", () => {
    let component;

    act(() => {
      component = renderer.create(
        <SearchInput handleSearch={handleSearch} searchQuery="" />
      );
    });

    const instance = component.root;
    const textInput = instance.findByType("TextInput");

    act(() => {
      textInput.props.onChangeText("example");
    });

    expect(handleSearch).toHaveBeenCalledWith("example");
  });
});
