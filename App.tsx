import {useColorScheme} from 'nativewind';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View className="flex h-full justify-center items-center">
        <Text
          className={`${
            isDarkMode ? 'text-green-200' : 'text-violet-300'
          } text-3xl`}>
          Hello World!!!!
        </Text>
        {/* <Text>Hello World!!!</Text> */}
        {/* <Text className="">Hello World!!!</Text> */}
        {/* <Button
          title="Click here for Alert"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button
          title="Click here for Toast"
          onPress={() =>
            ToastAndroid.show('First New Toast', ToastAndroid.SHORT)
          }
        /> */}
      </View>
    </SafeAreaView>
  );
}
export default App;
