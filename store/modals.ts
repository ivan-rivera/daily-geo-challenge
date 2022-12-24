import { action, Action, State } from "easy-peasy"

export interface ModalStoreModel {
  isOpen: boolean
  onOpen: Action<ModalStoreModel>
  onClose: Action<ModalStoreModel>
}

function createModalStore(): ModalStoreModel {
  return {
    isOpen: false,
    onOpen: action((state: State<ModalStoreModel>) => {
      state.isOpen = true
    }),
    onClose: action((state: State<ModalStoreModel>) => {
      state.isOpen = false
    }),
  }
}

export interface ModalsStoreModel {
  about: ModalStoreModel
  troubleshooting: ModalStoreModel
  howItWorks: ModalStoreModel
  contact: ModalStoreModel
}

export const modalsStore: ModalsStoreModel = {
  about: createModalStore(),
  troubleshooting: createModalStore(),
  howItWorks: createModalStore(),
  contact: createModalStore(),
}
