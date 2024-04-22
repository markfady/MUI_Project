import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feedbar from "./components/Feedbar";
import { Box, createTheme, PaletteMode, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode,setMode]=useState<PaletteMode>("light") //TypeScript's type definitions for Material-UI expect the mode property to be one of the values defined in the PaletteMode enum
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}> {/*Changes dynamically when the theme changes*/}
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Sidebar mode={mode} setMode={setMode} />
          <Feedbar />
          <Rightbar />
        </Stack>
        <Add/>
      </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
