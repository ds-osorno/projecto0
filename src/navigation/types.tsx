import React from 'react';
import type{ CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import type{ StackScreenProps } from '@react-navigation/stack';
import type{ BottomTabScreenProps } from '@react-navigation/bottom-tabs';
  
export type RootStackParamList= {
    Home: NavigatorScreenParams <HomeParamList>;
    Settings: undefined;
};
  
export type RootStackScreenProps <T extends keyof RootStackParamList>= StackScreenProps<RootStackParamList, T>;

  
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}