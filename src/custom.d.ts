declare module '*.scss';

declare module '*.svg';

declare module '.*.jpg';

declare module '.*.png';

declare module '.*.webp';

interface ResponsiveImageOutput {
  src: string;
  srcSet: string;
  placeholder: string | undefined;
  images: { path: string; width: number; height: number }[];
  width: number;
  height: number;
  toString: () => string;
}

declare module '*!rl' {
  const src: ResponsiveImageOutput;
  export default src;
}

declare module '.*.webp?sizes[]=320,sizes[]=640,sizes[]=960,sizes[]=1200,sizes[]=1800,sizes[]=2048' {
  const src: ResponsiveImageOutput;
  export default src;
}
