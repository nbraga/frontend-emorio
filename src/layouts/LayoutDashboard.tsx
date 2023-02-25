import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { AppBar } from "../components/appBar";
import { Sidebar } from "../components/sideBar";

interface Props {
  children: React.ReactNode;
}

export const LayoutDashboard = ({ children }: Props) => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <Box display={"flex"}>
      <Sidebar
        openDrawerSideBar={openDrawer}
        setOpenDrawerSideBar={setOpenDrawer}
      />

      <Box w={"full"}>
        <AppBar
          openDrawerAppBar={openDrawer}
          setOpenDrawerAppBar={setOpenDrawer}
        />
        <Box bgColor={"gray.100"} minH={"100vh"} p={5}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
