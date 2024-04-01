const margin = {
  S: 10,
  M: 15,
  L: 20,
};

const padding = {
  S: 10,
  M: 15,
  L: 20,
};

const borderRadius = {
  S: 5,
  L: 10,
  XL: 30,
};

const icon = {
  S: 20,
  M: 25,
  L: 30,
};
const borderWidth = {
  S: 0.5,
  M: 1,
};

export const shape = { margin, padding, borderRadius, icon, borderWidth };
export interface shapeType {
  margin: {
    [key: string]: number;
  };
  padding: {
    [key: string]: number;
  };
  borderRadius: {
    [key: string]: number;
  };
  icon: {
    [key: string]: number;
  };
  borderWidth: {
    [key: string]: number;
  };
}
