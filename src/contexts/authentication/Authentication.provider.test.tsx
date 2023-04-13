import { useContext } from "react";
import { AuthenticationContext } from "./Authentication.context";
import { renderHook } from "@testing-library/react-native";

describe("Authentication Provider", () => {
  it("has a default value of null", () => {
    const { result } = renderHook(() => useContext(AuthenticationContext));
    expect(result.current).toBeNull();
  });
});
