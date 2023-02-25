import { Stack } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useState } from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { MdPayments } from "react-icons/md";
import { SoloButton } from "./SoloButton";

export const ResponsiveSidebar = () => {
  const [openPopover, setOpenPopover] = useState(0);
  const router = useRouter();

  return (
    <Stack spacing={0}>
      <SoloButton
        justifyContent={"center"}
        direction="/admin/dashboard/articles"
      >
        <MdPayments />
      </SoloButton>
      <SoloButton justifyContent={"center"} direction="/admin/dashboard/users">
        <HiOutlineUsers />
      </SoloButton>
    </Stack>
  );
};
