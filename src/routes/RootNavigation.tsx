import { NavigationContainerRef, ParamListBase, StackActions } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef<ParamListBase>>();

export function navigate<RouteName extends keyof ParamListBase>(
  name: RouteName,
  params?: ParamListBase[RouteName]
) {
  if (navigationRef.current && navigationRef.current.isReady()) {
    navigationRef.current.navigate(name as string, params); // Type assertion for 'name'
  } else {
    //
  }
}

export function pop(page = 1) {
  if (navigationRef.current && navigationRef.current.isReady()) {
    navigationRef.current.dispatch(StackActions.pop(page));
  } else {
    //
  }
}
