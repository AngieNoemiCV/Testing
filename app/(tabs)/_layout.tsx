import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Niveles"
        options={{
          title: 'Niveles',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'checkmark-circle' : 'checkmark-circle'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Trofeos"
        options={{
          title: 'Trofeos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'trophy' : 'trophy-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Desafios"
        options={{
          href: null,
          title: 'Desafios',
        }}
      />

      <Tabs.Screen
        name="Presentacion"
        options={{
          href: null,
          title: 'Presentacion',
        }}
      />

      <Tabs.Screen
        name="Administrador"
        options={{
          href: null,
          title: 'Presentacion',
        }}
      />

      <Tabs.Screen
        name="LoginPatron"
        options={{
          href: null,
          title: 'Presentacion',
        }}
      />


    </Tabs>
  );
}
