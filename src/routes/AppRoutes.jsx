import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";



import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import Sidebar from "../components/Sidebar";
import Notification from "../screens/Notification";
import MenuItem from "../components/MenuItem";
import ChatingScreen from "../screens/ChatingScreen";
import InvoiceDetails from "../screens/chatingTabs/InvoiceDetails";
import CreateNewQuots from "../screens/chatingTabs/quots/CreateNewQuots";
import QuotsDetails from "../screens/chatingTabs/quots/QuotsDetails";
import Login from "../screens/auth/Login/Login";
import ForgetPassword from "../screens/auth/Login/ForgetPassword";



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
    <Stack.Screen name="LoginScreen" component={Login} />
    <Stack.Screen name="Forgetpassword" component={ForgetPassword} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ChatingScreen" component={ChatingScreen} />
    <Stack.Screen name="InvoiceDetails" component={InvoiceDetails} />
    <Stack.Screen name="Quots Details" component={QuotsDetails} />

    <Stack.Screen name="CreateNewQuots" component={CreateNewQuots} />
    <Stack.Screen options={{
    
      animation: "slide_from_left",
    presentation : "transparentModal",
      
    }} name="Notifications" component={Notification} />
  
   
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
      {/* <Drawer.Screen name="Notifications" component={Notification} /> */}
    </Drawer.Navigator>
  </NavigationContainer>
  );
};

export default AppRoutes;
