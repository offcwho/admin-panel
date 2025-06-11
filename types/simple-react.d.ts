declare module 'simplebar-react' {
  import { ComponentType, CSSProperties, ReactNode } from 'react';

  interface SimpleBarProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    scrollableNodeProps?: object;
    options?: object;
    autoHide?: boolean;
    forceVisible?: boolean | 'x' | 'y';
    direction?: 'ltr' | 'rtl';
    timeout?: number;
    clickOnTrack?: boolean;
  }

  const SimpleBar: ComponentType<SimpleBarProps>;
  export default SimpleBar;
}