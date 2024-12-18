import { shapeType } from '../../../theme/shape';
import { typographyType } from '../../../theme/typography';
export type colorsType = {
  PRIMARY: string;
  BUTTON: string;
  BORDER: string;
  BUTTON_DANGER: string;
  TEXT_SUCCESS: string;
  BUTTON_SUCCESS: string;
  GRAY_ICON: string;
  BACKGROUND: string;
  TEXT: string;
  TEXT_SHADE_1: string;
  TEXT_SECONDARY: string;
  HEADER_COLOR: string;
  HEADER_TEXT: string;
  TEXTINPUT_BACKGROUND: string;
  PLACEHOLDER: string;
  MODALBG: string;
  OUTLINE: string;
  APP_FOOTER_TEXT: string;
  APP_FOOTER_BG: string;
  CHECKBOX_TICK: string;
  CHECKBOX_UNFILLED: string;
  CHECKBOX_FILLED: string;
  BOTTOM_NAVIGATION_BACKGROUND: string;
  INFO_COLOR: string;
  INPUT_OUTLINE: string;
  RIPPLE_SELECT: string;
  SUMMARY_HEADING: string;
  SUMMARY_AMOUNT: string;
  SUMMARY_VIEW_BACKGROUND: string;
  GENERATE_AMOUNT: string;
  CHECK_PROMOTION_BUTTON_BACKGROUND: string;
  INVOICE_AMOUNT_BACKGROUND: string;
  WHITE: string;
  CUSTMERLIST_BAGRAOUND: string;
  OTPSCREEN_BUTTON: string;
  CUSTOMERFILTER_CONTAINER: string;
  INVALID_OTP: string;
  VALID_OTP: string;
  ICON: string;
  DISABLE_BUTTON: string;
  SHADOW: string;
  INVOICE_NUMBER: string;
  PROFILE_BACKGROUND: string;
  SALE_PERSON_TEXT1_COLOR: string;
  SALE_PERSON_TEXT2_COLOR: string;
  SALE_PERSON_TEXT3_COLOR: string;
  SALE_PERSON_TEXT4_COLOR: string;
  ADD_PROFILE_BACKGROUND_COLOR: string;
  PRODUCT_CONTAINER_BACKGROUND_COLOR: string;
  COUPON_CONTAINER_BACKGROUND_COLOR: string;
  SCAN_PRODUCT_CONTAINER_BACKGROUND_COLOR: string;
  PRODUCT_OPTION_CONTAINER_BACKGROUND_COLOR: string;
  PROFILE_DATA_TEXT_COLOR: string;
  PRODUCT_OPTION_TEXT_COLOR: string;
  COUPON_CONTAINER_TEXT_COLOR: string;
  CREDIT_BOX_COLOR: string;
  PRODUCT_CONTAINER_COLOR: string;
  SELECT_PRODUCT_CONTAINER_COLOR: string;
  FOOTER_COLOR: string;
  PRODUCT_LIST_BOX_DATA_TEXT_COLOR: string;
  PRODUCT_LIST_BOX_DATA_NUMBER_COLOR: string;
  STOCK_CONTAINER_TEXT_COLOR: string;
  ICON_PRICE_CONTAINER_ICON_COLOR: string;
  ICON_PRICE_CONTAINER_TEXT_COLOR: string;
  DROP_DOWN_CONTENT_COLOR: string;
  DROP_DOWN_CONTENT_TEXT_COLOR: string;
  FILTER_CONTAINER: string;
  CONTAINER_TEXT_COLOR: string;
  CONTAINER_TEXT_COLOR_TEXT: string;
  HEADER_NOTIFICATION_COLOR: string;
  SEARCH_CONTAINER_ICON_TEXT_COLOR: string;
  SEARCH_CONTAINER_BOX_COLOR: string;
  IMAGE_BACKGROUND_COLOR: string;
  PRODUCT_SEARCH_COLOR: string;
  PROFILE_COLOR: string;
  SEARCH_FILTER_COLOR: string;
  CONTAINER_EQUALIZER_COLOR: string;
  SELECT_STORE_CONTAINER: string;
  SELECT_ITEM_COLOR: string;
  SEARCH_BOX_COLOR: string;
  SEARCH_CONTAINER_HEADER_COLOR: string;
  SEARCH_CONTAINER_HEADER_TEXT: string;
  SELECT_STORE_HEADER_COLOR: string;
  STEP_BOX_COLOR: string;
  SELECT_STORE_BUTTON_COLOR: string;
  STEPS_BOX_TEXT_COLOR: string;
  SELECT_STORE_BACKGROUND_COLOR: string;
  SELECT_COUNTER_BACKGROUND_COLOR: string;
  STAR: string;
  TEXT_COLOR: string;
};
export interface ThemeType {
  colors: colorsType;
  typography: typographyType;
  shape: shapeType;
}
