import { Box } from "@mui/material";
import Post from "./Post";
const Feedbar = () => {
  return (
    <Box flex={3} p={2}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  );
};

export default Feedbar;
