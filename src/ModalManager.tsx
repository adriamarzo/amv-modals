import { type FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useModals } from './hooks/useModals'
import { ModalWrapper } from './components/ModalWrapper'

interface ModalManagerProps {
  portalId: string
  backgroundColor?: string
  zIndex?: number
}

export const ModalManager: FC<ModalManagerProps> = ({
  portalId,
  backgroundColor = '#333333cc',
  zIndex = 1
}) => {
  const modalList = useModals()
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let portalDOMElement = document.getElementById(portalId)

    if (portalDOMElement == null) {
      portalDOMElement = document.createElement('div')
      portalDOMElement.id = portalId
      portalDOMElement.setAttribute('data-testid', portalId)
      document.body.appendChild(portalDOMElement)
    }

    setPortalElement(portalDOMElement)
  }, [portalId])

  return (portalElement != null)
    ? ReactDOM.createPortal(
      <>
        {modalList.map(({ content, id, settings }, index) => {
          return (
          <ModalWrapper
            backgroundColor={index === 0 ? backgroundColor : 'transparent'}
            key={id}
            onClose={settings.onClose}
            zIndex={zIndex}
          >
            {content}
          </ModalWrapper>
          )
        })}
      </>,
      portalElement
    )
    : null
}
