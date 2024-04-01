const size = {
  FOOTER_FONT_SIZE: 10,
  XXS: 11,
  XS: 12,
  SM: 13,
  SR: 15,
  S: 16,
  M: 20,
  L: 30,
};

const letterSpacing = {
  S: 2,
  M: 5,
  L: 10,
};

export const typography = { size, letterSpacing };

export interface typographyType {
  size: {
    [key: string]: number;
  };
  letterSpacing: {
    [key: string]: number;
  };
}
