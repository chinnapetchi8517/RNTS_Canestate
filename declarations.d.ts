// declare module '*.svg' {
//   import react = require('react');
//   type TSVGElementProps = react.FC<react.SVGAttributes<SVGSVGElement>>;

//   export const reactcomponent: TSVGElementProps;
//   const src: string;
//   export default src;
// }
// declare module '*.svg' {
//   import {FC, SVGProps} from 'react';
//   type TSVGElementProps = SVGProps<SVGSVGElement>

//   const content: FC<SVGProps<SVGElement>>;
//   export default content;
// }
declare module '*.svg' {
  import {ReactElement, SVGProps} from 'react';
  const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
  export {ReactComponent};
}
// declare module '*.svg' {
//   import {SvgProps} from 'react-native-svg';
//   const content: React.FC<SvgProps>;
//   export default content;
// }

// declare module '*.svg' {
//   import React from 'react';
//   import {SvgProps} from 'react-native-svg';
//   const content: React.FC<
//     SvgProps & {
//       fillSecondary?: string;
//     }
//   >;
//   export default content;
// }
