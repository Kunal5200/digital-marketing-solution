import { ROBOTO } from "@/utils/fonts";
import { HEADING_STRIP_PROPS } from "@/utils/types";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
const HeadingStrip = ({ img, heading, color }: HEADING_STRIP_PROPS) => {
  return (
    <div>
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <Image src={img} alt="" />
        <Typography
          sx={{
            color: color,
            fontFamily: ROBOTO.style,
            textTransform: "uppercase",
            fontWeight: 550,
          }}
        >
          {heading}
        </Typography>
      </Stack>
    </div>
  );
};

export default HeadingStrip;
