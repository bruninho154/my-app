//arquivo responsável por criar as rotas da aplicação, utilizando o react-navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Product from '../screens/Product';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    );
}