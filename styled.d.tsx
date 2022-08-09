import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      lightBlue: string;
      darkBlue: string;
      sea: string;
      white: string;
      grey: string;
      red: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
