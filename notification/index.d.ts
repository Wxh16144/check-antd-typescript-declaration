import * as React from 'react';
import type { ArgsProps } from './interface';
import useNotification from './useNotification';
interface BaseMethods {
    open: (config: ArgsProps) => void;
    destroy: (key?: React.Key) => void;
    config: any;
    useNotification: typeof useNotification;
}
type StaticFn = (config: ArgsProps) => void;
interface NoticeMethods {
    success: StaticFn;
    info: StaticFn;
    warning: StaticFn;
    error: StaticFn;
}
declare const staticMethods: NoticeMethods & BaseMethods;
export default staticMethods;
