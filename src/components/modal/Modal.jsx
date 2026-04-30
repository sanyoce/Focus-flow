import { createPortal } from 'react-dom'
const modalRoot = document.getElementById('modal-root')

export function Modal({ isOpen, onClose, children }){
    if(!isOpen) return null


    return createPortal(
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
            <div className='bg-white flex flex-col gap-4 rounded-xl p-6 shadow-lg relative'>
                {children}
                <button className="absolute top-2 right-2" onClick={onClose}>x</button>
            </div>
        </div>,
        
        modalRoot
    )
}