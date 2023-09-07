export interface Modal {
  content: ModalContent
  id: ModalId
  settings: ModalSettings
}

export type ModalId = string
export interface ModalSettings {
  onClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}
export type ModalContent = React.ReactNode

export interface ModalEventData extends Omit<Partial<Modal>, 'id'> {
  id: ModalId
  action: ModalActions
}
