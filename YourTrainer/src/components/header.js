import {StatusBar} from "expo-status-bar";
import {Text, View} from "react-native";
import {styles} from "../styles/styles";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Header() {
	const insets = useSafeAreaInsets(); // Отримуємо відступи безпечної зони.

	return (
		<View style={[styles.header, {paddingTop: insets.top}]}>
			<StatusBar style="auto" />
			<View style={styles.container}>
				<Text style={styles.headerTitle}>YourTrainer</Text>
			</View>
		</View>
	);
}

// useSafeAreaInsets: Відповідає за обчислення безпечної зони (наприклад, для пристроїв із вирізами або статус-баром).
