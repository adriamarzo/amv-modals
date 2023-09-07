import { MODAL_ACTIONS, MODAL_EVENT_NAME } from '../constants'
import type { ModalEventData, ModalContent, ModalId, ModalSettings } from '../types'

class ModalEventEmitter {
  emit (eventName: string, payload: ModalEventData): void {
    window.dispatchEvent(new CustomEvent(eventName, { detail: payload }))
  }

  addModal (id: ModalId, content: ModalContent, settings: ModalSettings = {}): void {
    this.emit(MODAL_EVENT_NAME, {
      id,
      content,
      settings,
      action: MODAL_ACTIONS.ADD
    })
  }

  removeModal (id: ModalId): void {
    this.emit(MODAL_EVENT_NAME, { id, action: MODAL_ACTIONS.REMOVE })
  }

  updateModal (id: ModalId, content: ModalContent, settings: ModalSettings = {}): void {
    this.emit(MODAL_EVENT_NAME, {
      id,
      content,
      settings,
      action: MODAL_ACTIONS.UPDATE
    })
  }

  updateModalSettings (id: ModalId, settings: ModalSettings = {}): void {
    this.emit(MODAL_EVENT_NAME, {
      id,
      settings,
      action: MODAL_ACTIONS.UPDATE_SETTINGS
    })
  }

  subscribe (eventCallback: any): void {
    window.addEventListener(MODAL_EVENT_NAME, eventCallback)
  }

  unsubscribe (eventCallback: any): void {
    window.removeEventListener(MODAL_EVENT_NAME, eventCallback)
  }
}
export const modalEventEmitter = new ModalEventEmitter()
