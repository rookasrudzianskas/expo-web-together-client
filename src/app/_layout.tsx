import { Stack } from 'expo-router';
import * as Font from 'expo-font';
import { useEffect } from 'react';

export default function RootLayout() {
  const loadFonts = async () => {
    await Font.loadAsync({
      Courier: require('./fonts/FontsFree-Net-SLC_.ttf'), // Replace with your font file path
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Posts' }} />
      <Stack.Screen name="[slug]" options={{ title: 'Post Details' }} />
    </Stack>
  );
}
