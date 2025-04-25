import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';
import {View, Text, Image} from 'react-native';

const Tab = createBottomTabNavigator();

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View
    style={{
      flex: 1,
      marginTop: 1,
      flexDirection: 'column',
      alignItems: 'center',
      width: 80,
    }}>
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        tintColor: focused ? '#0061ff' : '#666876',
        width: 24,
        height: 24,
      }}
    />
    <Text
      style={{
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
        width: '100%',
        color: focused ? '#0061ff' : '#666876',
      }}>
      {title}
    </Text>
  </View>
);

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 70,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={require('../../assets/icons/home.png')}
              focused={focused}
              title="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={require('../../assets/icons/heart.png')}
              focused={focused}
              title="Favorites"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
