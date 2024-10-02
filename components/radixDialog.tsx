import { ReactNode } from "react";

import { MdClose } from "react-icons/md";
const DialogRadix = require('@radix-ui/react-dialog');

export function Dialog(props: DialogProps & ExpandedDialogProps) {
    const { open, onClose: setOpen, bigWidth = false } = props;

    return <DialogRadix.Root open={open} onOpenChange={setOpen}>
        <DialogRadix.Portal >
            <DialogRadix.Overlay className={`${overlayClassName} ${props.zIndex ?? 'z-50'} max-w-full`}>
                <DialogRadix.Content className={`${contentClassName} ${props.className} ${props.zIndex ?? 'z-50'} ${props.bigWidth ? 'max-w-4xl' : props.mediumWidth ? 'max-w-2xl' : `max-w-md`}`}>
                    {props.title && <DialogRadix.Title className="text-2xl">{props.title}</DialogRadix.Title>}
                    {(props.children instanceof Function) ? props.children(setOpen) : props.children}
                    {props.closeIcon &&
                        <button onClick={(e) => { e.stopPropagation(); setOpen() }} className="">
                            <MdClose data-cy="close-dialog" className="w-6 h-6 icon-button absolute m-4 right-0 top-0" />
                        </button>
                    }
                    {props.buttons && <div className="flex space-x-3 flex-row justify-end">
                        {props.buttons.map((i, n) => {
                            const button = <button
                                className={`${(n % 2 == 0) ? 'btn-secondary-text' : 'btn-primary'}`}
                                onClick={(e) => { if (i.onClick) i.onClick(e, () => setOpen()) }}
                            >{i.name}</button>
                            return i.error ? <div className="flex w-fit justify-center items-center flex-col">
                                {button}
                            </div> : button
                        })}
                    </div>}



                </DialogRadix.Content>

            </DialogRadix.Overlay>
        </DialogRadix.Portal>
    </DialogRadix.Root>
}


export const contentClassName = 'card shadow-2xl px-8 py-10 min-w-[350px] relative'
export const overlayClassName = 'fixed inset-0 overflow-y-scroll max-height-[85vh] grid place-items-center bg-gray-800 bg-opacity-25'

export type ExpandedDialogProps = {
    title?: string;
    buttons?: { name: string, onClick: (e: any, onClose: () => void) => void, error?: string }[]
}

export type DialogProps = {
    children: React.ReactNode | ((onClose: (b: boolean) => void) => ReactNode);
    open: boolean;
    onClose: () => void;
    bigWidth?: boolean;
    mediumWidth?: boolean;
    disablePadding?: string;
    closeIcon?: boolean;
    zIndex?: string;
    className?: string
}