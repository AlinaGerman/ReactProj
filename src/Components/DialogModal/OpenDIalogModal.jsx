import { useEffect, useRef } from 'react'

export default function OpenDIalogModal({open, children, ... props}){
    const dialog = useRef()

    useEffect(() => {
        if (open){
            dialog.current.showModal()
        } else{
            dialog.current.close()
        }
    }, [open])

    return(
        <dialog ref={dialog} className={props.className}>
            {children}
        </dialog>
    )
}