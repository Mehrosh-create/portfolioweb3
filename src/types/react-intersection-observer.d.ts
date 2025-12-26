declare module 'react-intersection-observer' {
  import * as React from 'react';

  export interface InViewOptions {
    threshold?: number | number[];
    root?: Element | Document | null;
    rootMargin?: string;
    triggerOnce?: boolean;
    skip?: boolean;
    initialInView?: boolean;
    trackVisibility?: boolean;
    delay?: number;
    onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void;
  }

  export type UseInViewResponse = {
    ref: (node?: Element | null) => void;
    inView: boolean;
    entry?: IntersectionObserverEntry | null;
  };

  export function useInView(options?: InViewOptions): UseInViewResponse;

  export interface InViewProps extends InViewOptions {
    as?: React.ElementType;
    children?: React.ReactNode | ((fields: UseInViewResponse) => React.ReactNode);
  }

  export const InView: React.FC<InViewProps>;

  const _default: typeof InView;
  export default _default;
}
