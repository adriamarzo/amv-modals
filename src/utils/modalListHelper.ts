import type { ModalId, Modal, ModalSettings } from '../types'

export function removeItemById (array: Modal[], id: ModalId): Modal[] {
  const index = array.findIndex(({ id: itemId }) => itemId === id)

  if (index < 0) {
    return array
  }

  const newArray = [...array]
  newArray.splice(index, 1)

  return newArray
}

export const updateModalSettings = ({
  id, modalList, settings
}: { id: ModalId, modalList: Modal[], settings: ModalSettings }): void => {
  const modalIndex = modalList.findIndex(({ id: modalId }) => modalId === id)

  if (modalIndex < 0 || modalIndex >= modalList.length) {
    return
  }

  modalList[modalIndex] = { ...modalList[modalIndex], settings }
}

export const updateModal = ({ modalList, modal }: { modalList: Modal[], modal: Modal }): void => {
  const modalIndex = modalList.findIndex(({ id }) => id === modal.id)

  if (modalIndex < 0 || modalIndex >= modalList.length) {
    return
  }

  modalList[modalIndex] = modal
}
