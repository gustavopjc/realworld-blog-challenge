import { AuthState } from "./types/AuthStateTypes";

export interface NavbarItem {
  name: string,
  routerName: string,
  showIn:  AuthState[],
};

