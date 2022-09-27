import React from 'react'


export default function Modal({ open, children, onClose }) {
    if (!open) return null      // si open es false no renderizo el modal

  
    return(
        <>
        <div onClick={onClose} className='fixed top-0 left-0 right-0 bottom-0 bg-main-dark bg-opacity-50 z-[1000]' />
            <div className='fixed top-[50%] left-[50%] bg-main-light p-[50px] z-[1000] translate-x-[-50%] translate-y-[-50%] flex flex-col font-bold rounded-md'>
                <button onClick={onClose} className='border bg-red-dark w-[30px] fixed top-1 left-1 font-bold rounded'>X</button>
                {children}
            </div>
      </>
      
    )
  }