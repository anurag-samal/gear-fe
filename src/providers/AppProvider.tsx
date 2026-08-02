import type { ParentComponent } from "solid-js";
import {Toaster} from "@/components/Toast";
import { AuthProvider } from "@/composites/auth";
import { FontProvider } from "./FontProvider";
import { ThemeProvider } from "./ThemeProvider";

export const AppProvider: ParentComponent = (props) => {
  return (
    <ThemeProvider>
      <FontProvider>
        <AuthProvider>
          {props.children}
          <Toaster/>
        </AuthProvider>
      </FontProvider>
    </ThemeProvider>
  );
};