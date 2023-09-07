import type { Modal, ModalEventData } from '../types'

export const isModal = (modal: Omit<ModalEventData, 'action'>): modal is Modal =>
  Boolean(modal.content) && Boolean(modal.settings)
