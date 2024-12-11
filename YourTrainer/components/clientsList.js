import React, {useState} from "react";
import {styles} from "./styles";
import {Text, View, FlatList, Pressable} from "react-native";

export function DynamicList() {
	const [items, setItems] = useState([]);

	// Додати елемент
	const addItem = () => {
		setItems([...items, `Item ${items.length + 1}`]);
	};

	// Видалити останній елемент
	const delItem = () => {
		if (items.length > 0) {
			setItems(items.slice(0, -1)); // Видаляємо останній елемент
		} else {
			console.log("No items yet");
		}
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={items}
				keyExtractor={(item, index) => index.toString()} // Унікальний ключ
				renderItem={({item}) => <Text style={styles.listItem}>{item}</Text>}
			/>

			<View style={styles.listControlPanel}>
				<Pressable onPress={addItem} style={styles.listControlBtns}>
					<Text>Add Item</Text>
				</Pressable>
				<Pressable onPress={delItem} style={styles.listControlBtns}>
					<Text>Del Item</Text>
				</Pressable>
			</View>
		</View>
	);
}
