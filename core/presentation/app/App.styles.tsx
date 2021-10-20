import { styled } from "@mui/material/styles";
import Container, { ContainerProps } from "@mui/material/Container";

export const StyledContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  height: "100vh",
  overflow: "hidden",
  backgroundImage: `linear-gradient(-45deg, rgba(68, 47, 175, 0.52), rgba(246, 65, 108, 0.75)),
    url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&w=1200&dpr=2')`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
}));
