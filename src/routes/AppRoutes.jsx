import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";



import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import Sidebar from "../components/sidebar";



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// 👉 Stack Navigator for authentication screens
const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      statusBarAnimation: "fade",
      statusBarBackgroundColor: "#19578F",
      statusBarStyle: "light",
      animation: "slide_from_right",
    }}
    initialRouteName="SplashScreen"
  >
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
   
  </Stack.Navigator>
);

// 👉 Drawer Navigator (Sidebar on front-layer)
const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <Sidebar {...props} />} 
        screenOptions={{
          headerShown: false,
          drawerType: "front", 
        }}
      >
        <Drawer.Screen name="Main" component={AuthStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
