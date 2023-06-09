import React from "react";
import { NativeBaseProvider } from "native-base";
import AppStack from "./src/components/stacks/AppStack";

const App = () => {
  return (
    <NativeBaseProvider>
      <AppStack />
    </NativeBaseProvider>
  );
};

export default App;
