import React, { useEffect } from "react";
import { Home } from "./src/Screens/Home";
import SocketServcies from "./src/utils/SocketServcies";

export default App = () => {
  useEffect(() => {
    SocketServcies.initializeSocket();
  }, []);
  return <Home />;
};
