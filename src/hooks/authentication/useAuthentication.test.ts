import { renderHook } from "@testing-library/react-native";
import { HookErrorMessage } from "../constants";
import useAuthentication from "./useAuthentication";

describe("useAuthentication Hook", () => {
  it("throws an error if custom hook is used without Authentication Context provided", () => {
    expect(() => renderHook(() => useAuthentication())).toThrow(
      new Error(HookErrorMessage.auth),
    );
  });
});
