// .../app/AppNavigator.js

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import your screen components
import FormContainer from "./screens/FormContainer";
import FormDataScreen from "./screens/FormDataScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Form" component={FormContainer} />
                <Stack.Screen name="FormData" component={FormDataScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
