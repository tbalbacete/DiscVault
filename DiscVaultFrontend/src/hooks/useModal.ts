import { atom, useAtom } from "jotai";

const modalAtom = atom<undefined | React.ReactNode>(undefined);

export const useModal = () => {
  const [modalComponent, setModalComponent] = useAtom(modalAtom);

  const openModal = (component: React.ReactNode) => {
    setModalComponent(component);
  };

  const closeModal = () => {
    setModalComponent(undefined);
  };

  return { modalComponent, openModal, closeModal };
};
