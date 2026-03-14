export const closeModal = (): Promise<void> => {
  return new Promise((resolve) => {
    const modalEl = document.getElementById("Reservierungs-Modal");
    if (!modalEl) {
      resolve();
      return;
    }

    modalEl.addEventListener("hidden.bs.modal", () => resolve(), { once: true });

    // Den vorhandenen data-bs-dismiss Button klicken – Bootstraps eigener Mechanismus,
    // zuverlässiger als getInstance/getOrCreateInstance in React
    const dismissBtn = modalEl.querySelector<HTMLElement>("[data-bs-dismiss='modal']");
    if (dismissBtn) {
      dismissBtn.click();
    }
  });
};
