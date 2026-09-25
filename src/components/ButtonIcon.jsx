import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function ButtonIcon({ icon, ...rest }) {
    return (
        <TouchableOpacity {...rest} >
            <MaterialIcons 
                name={icon}
                size={24}
            />
        </TouchableOpacity>
    )
}

// (rest, ...rest) serve para passar todas as propriedades restantes para o componente TouchableOpacity,
//  permitindo que ele receba qualquer propriedade adicional que não tenha sido explicitamente definida no componente ButtonIcon.
//  Isso é útil para tornar o componente mais flexível e reutilizável, permitindo que você adicione estilos,
//  eventos de clique, ou outras propriedades conforme necessário.