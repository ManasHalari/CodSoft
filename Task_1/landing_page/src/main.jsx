import React from "react";
import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import customTheme from "./utils/theme";
import { BrowserRouter } from "react-router-dom";

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
  )
  
