export const MODAL_ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove',
  UPDATE: 'update',
  UPDATE_SETTINGS: 'update-settings'
} as const

export const MODAL_EVENT_NAME = 'web_modal_event' as const

export type ModalActions = typeof MODAL_ACTIONS[keyof typeof MODAL_ACTIONS]
