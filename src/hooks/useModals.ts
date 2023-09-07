import { useState, useEffect } from 'react'
import { MODAL_ACTIONS } from '../constants'
import { modalEventEmitter } from '../utils/eventEmitter'
import { removeItemById, updateModal, updateModalSettings } from '../utils/modalListHelper'
import { type ModalEventData, type Modal } from '../types'
import { isModal } from '../utils/typeguards'

export function useModals (): Modal[] {
  const [modalList, setModalList] = useState<Modal[]>([])

  useEffect(() => {
    function handleModalEvent ({ detail: { action, ...modal } }: { detail: ModalEventData }): void {
      switch (action) {
        case MODAL_ACTIONS.REMOVE:
          setModalList(removeItemById(modalList, modal.id))
          break
        case MODAL_ACTIONS.UPDATE_SETTINGS:
          (modal.settings != null) && updateModalSettings({ id: modal.id, modalList, settings: modal.settings })
          break
        case MODAL_ACTIONS.UPDATE:
          isModal(modal) && updateModal({ modalList, modal })
          break
        default:
          if (!isModal(modal) || modalList.some(({ id }) => id === modal.id)) {
            return
          }
          setModalList([...modalList, modal])
      }
    }

    modalEventEmitter.subscribe(handleModalEvent)

    return () => {
      modalEventEmitter.unsubscribe(handleModalEvent)
    }
  })

  return modalList
}
