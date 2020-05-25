import * as React from 'react';
import { ResponsiveProp } from '../reponsiveProp';
import { Size, Materials, StyleProps } from '../styleUtils';
declare type ResponsiveSize = ResponsiveProp<Size>;
interface PaddingProps {
    p?: ResponsiveSize;
    pl?: ResponsiveSize;
    pr?: ResponsiveSize;
    pt?: ResponsiveSize;
    pb?: ResponsiveSize;
    px?: ResponsiveSize;
    py?: ResponsiveSize;
}
export declare type BoxProps = StyleProps & PaddingProps & {
    children?: React.ReactNode;
    component?: React.ElementType;
    display?: ResponsiveProp<'block' | 'inline' | 'inline-block' | 'flex' | 'none'>;
    flex?: boolean;
    material?: keyof typeof Materials;
};
export declare function Box({ children, component, ...rest }: BoxProps): JSX.Element;
export {};
