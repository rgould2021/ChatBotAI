import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import React from 'react';
import { useEffect } from 'react';
import { Button, View, useColorScheme } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter()
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: true,
    title: 'Chat Bot',
    headerRight: () => (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
        <Button
          title="Logout"
          onPress={() => {
            //The logout code is implemented here then re-route to login page
            router.push('/');
          }}
        />
      </View>
    ), }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name='index' options ={{headerShown: false, title: 'Home'}} />
        <Stack.Screen name='home/aboutus' options ={{headerShown: false , title: 'About'}} />
       
       <Stack.Screen name='home/profile' options ={{headerShown: false , title: 'Profile'}} />
   
        <Stack.Screen name ='register/index' options={{headerShown: false,title: 'Register'}}/>
        <Stack.Screen name ='login' options={{title: 'Login Modal',presentation: 'modal' }}/>
        <Stack.Screen name = "[...missing]" options={{ title: 'Oops!' }} />
        </Stack>
    </ThemeProvider>
  );
}

