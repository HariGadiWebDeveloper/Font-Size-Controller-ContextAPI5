import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useFontContext } from "../Context/FontSizeControllerContext";

const FontController = () => {
  const { size, setSize } = useFontContext();
  console.log(size, "size")
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={5}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={(event : any) => {
          setSize(event?.target?.value);
        }}
      />
    </Box>
  );
};

export default FontController;
