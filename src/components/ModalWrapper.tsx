import type { CSSProperties, FC } from 'react'

const MODAL_WRAPPER_STYLES: CSSProperties = {
  position: 'fixed',
  inset: '0px',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}
const WRAPPER_ID = 'modal-wrapper'

interface ModalWrapperProps {
  backgroundColor: string
  children?: React.ReactNode
  onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  zIndex: number
}

export const ModalWrapper: FC<ModalWrapperProps> = ({
  backgroundColor,
  children = null,
  onClose = null,
  zIndex = 1
}) => {
  const wrapperStyles = { ...MODAL_WRAPPER_STYLES, backgroundColor, zIndex }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (onClose == null) {
      return
    }

    if (event.currentTarget.getAttribute('data-id') === WRAPPER_ID) {
      onClose(event)
    }
  }

  return (
    <div
      data-id={WRAPPER_ID}
      data-testid={WRAPPER_ID}
      onClick={handleClick}
      style={wrapperStyles}
    >
      {children}
    </div>
  )
}
