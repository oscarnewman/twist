import * as React from 'react';
import { StyleProps, Size } from '../styleUtils';
import { ResponsiveProp } from '../reponsiveProp';
declare type StackProps = StyleProps & {
    children?: React.ReactNode;
    space?: ResponsiveProp<Size>;
    divide?: boolean;
};
export declare function Stack({ children, ...rest }: StackProps): JSX.Element;
export {};
