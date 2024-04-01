/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @author: Datta Chechar
 * @desc: validates string
 * @params: (str: '' or null or undefined)
 * @returns: boolean :: true -> valid; false -> invalid
 * **/
export const isValidString = (str: string | null | undefined): boolean => {
  if (!str) return false; // if null or undefined
  if (str.length === 0) return false; // if empty
  return true; // if valid
};

/**
 * @author: Datta Chechar
 * @desc: validates array
 * @params: (arr: [] or null or undefined)
 * @returns: boolean :: true -> valid; false -> invalid
 * **/
export const isValidArray = (arr: any[] | null | undefined): boolean => {
  if (!arr) return false; // if null or undefined
  if (arr.length === 0) return false; // if empty
  return true; // if valid
};

/**
 * @author: Datta Chechar
 * @desc: validates object
 * @params: (obj: {} or null or undefined)
 * @returns: boolean :: true -> valid; false -> invalid
 * **/
export const isValidObject = (obj: { [key: string]: any } | null | undefined): boolean => {
  if (!obj) return false; // if null or undefined
  if (Object.keys(obj).length === 0) return false; // if empty
  return true; // if valid
};

/**
 * @author: Datta Chechar
 * @desc: validates number
 * @params: (num: null or undefined)
 * @returns: boolean :: true -> valid; false -> invalid
 * **/
export const isValidNumber = (num: number | null | undefined): boolean => {
  if (!num) return false; // if null or undefined
  if (Number.isNaN(Number(num))) return false; // not a digit
  return true; // if valid
};

/**
 * @author: Datta Chechar
 * @desc: checks number is negative
 * @params: (num: null or undefined | number | string)
 * @returns: boolean :: true -> valid; false -> invalid
 * **/
export const isNegativeNumber = (num: number | string | null | undefined): boolean => {
  if (!num) return false; // if null or undefined
  if (Number(num) < 0) {
    return true; // is negative
  }
  return false; // is positive
};

/**
 * @author: Datta Chechar
 * @desc: Checks special characters such as .,+-*
 * @params: (str: string)
 * @returns: boolean :: it returns true if it finds a match, otherwise, it returns false
 * **/
export const isSpecialChars = (str: string): boolean => {
  const specialChars = /[`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;
  return specialChars.test(str);
};
