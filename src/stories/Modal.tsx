import { type CSSProperties, type FC } from 'react'

const MODAL_STYLES: CSSProperties = {
  position: 'relative',
  backgroundColor: 'white',
  maxWidth: '500px',
  borderRadius: '4px'
}

interface Props {
  description?: string
  onClick?:
  | null
  | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  onClose?:
  | null
  | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  title: string
}

const Modal: FC<Props> = ({
  description = '',
  onClick = null,
  onClose = null,
  title
}) => (
  <div style={MODAL_STYLES} className="box m-auto p-4">
    <p><strong>{title}</strong></p>
    <br/>
    <p>{description}</p>
    <br />
    <div className='columns'>
    {onClick != null && (<div className='column'>
      <button onClick={onClick} type="button" className="button is-primary">
        Try another static modal
      </button>
      </div>)}
      {onClose != null && (<div className='column'>
      <button onClick={onClose} type="button" className="button is-danger">
        Close this modal
      </button></div>
      )}
    </div>

  </div>
)

export default Modal
