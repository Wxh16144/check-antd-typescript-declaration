import * as React from 'react';
import type { ModalFuncProps } from './Modal';
interface ConfirmDialogProps extends ModalFuncProps {
    afterClose?: () => void;
    close?: (...args: any[]) => void;
    autoFocusButton?: null | 'ok' | 'cancel';
    rootPrefixCls: string;
    iconPrefixCls?: string;
}
export declare function ConfirmContent(props: ConfirmDialogProps & {
    confirmPrefixCls: string;
}): JSX.Element;
declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
export default ConfirmDialog;
