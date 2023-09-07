import { type FC, useState } from 'react'
import Modal from './Modal'
import { ModalManager, modalEventEmitter } from '..'

interface Props {
  /**
   * What background color to use for the backdrop
   */
  backgroundColor?: string
  /**
   * Customize the modal's depth
   */
  zIndex?: number
}

/**
 * Example to play with modals
 */
const App: FC<Props> = ({ backgroundColor = '#333333cc', zIndex = 1 }) => {
  const [modalCount, setModalCount] = useState(0)

  const handleDuplicatedClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.stopPropagation()

    modalEventEmitter.addModal(
      'duplicated',
      <Modal
        title="Static modal"
        description="Multiple modals with the same ID are not allowed. Modals can be configured to prevent closing them by clicking on the backdrop."
        onClick={handleDuplicatedClick}
        onClose={(event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
          event.stopPropagation()
          modalEventEmitter.removeModal('duplicated')
        }}
      />
    )
  }

  const handleClick = (): void => {
    const currentId = modalCount.toString()

    modalEventEmitter.addModal(
      currentId,
      <Modal
        title="New modal"
        description={`I'm the modal with ID: ${currentId}`}
        onClick={handleDuplicatedClick}
      />,
      {
        onClose: () => {
          modalEventEmitter.removeModal(currentId)
        }
      }
    )

    setModalCount(modalCount + 1)
  }

  return (
    <div className="container">
      <span
        className="tag is-warning has-text-centered"
        style={{
          position: 'absolute',
          right: '0',
          top: '0',
          zIndex: 1
        }}
      >
        Warning, I have a z-index of 1
      </span>
      <button className="button is-primary" onClick={handleClick} type="button">
        Open new modal
      </button>

      <ModalManager
        portalId="modal-portal"
        backgroundColor={backgroundColor}
        zIndex={zIndex}
      />
    </div>
  )
}

export default App
