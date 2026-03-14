import { Modal } from "bootstrap";

export const closeModal = () => {
  const modal = document.getElementById("Reservierungs-Modal");
  const modalInstance = Modal.getInstance(modal as Element);
  modalInstance?.hide();
};
