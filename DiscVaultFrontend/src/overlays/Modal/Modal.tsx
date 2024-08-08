import { useModal } from "@/hooks/useModal";
import { Modal as MuiModal } from "@mui/material";
import { StyledModalContainer } from "./Modal.styles";

export const Modal: React.FC = () => {
  const { modalComponent, closeModal } = useModal();

  return (
    <MuiModal open={Boolean(modalComponent)} onClose={closeModal}>
      <StyledModalContainer>{modalComponent}</StyledModalContainer>
    </MuiModal>
  );
};
