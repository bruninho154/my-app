import { View } from "react-native";
import Header from '../components/Header';
import ButtonIcon from '../components/ButtonIcon';
import Title from '../components/Title';
import { useNavigation } from "@react-navigation/native";

export default function Product() {
    const navigation = useNavigation();
    return (
        <View 
            style={{
                flex:1,
                padding: 32,
                paddingTop: 54
            }}>
            <Header>
                <Title>Product</Title>
                <ButtonIcon 
                    icon="arrow-circle-left"
                    onPress={() => {navigation.goBack()}}

                />
            </Header>

        </View>
    )   
}