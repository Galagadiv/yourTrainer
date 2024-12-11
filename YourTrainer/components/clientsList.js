import React, {useState} from "react";
import {styles} from "./styles";
import {Text, View, FlatList, Pressable} from "react-native";
import DeleteIcon from "../img/icon-delete.svg";
import AddIcon from "../img/icon-add.svg";

export function DynamicList() {
	const [clients, setClients] = useState([]);

	// Додати елемент
	const addItem = () => {
		setClients([...clients, `Item ${clients.length + 1}`]);
	};

	// Видалити конкретний елемент
	const delItem = (index) => {
		setClients(clients.filter((_, i) => i !== index));
	};

	return (
		<View style={styles.containerListScreen}>
			<View style={styles.listControlPanel}>
				<Pressable onPress={addItem} style={styles.listControlBtns}>
					<AddIcon style={styles.itemDelBtnImg} />
				</Pressable>
			</View>
			<FlatList
				style={styles.listClients}
				data={clients}
				keyExtractor={(item, index) => index.toString()} // Унікальний ключ
				renderItem={({item, index}) => (
					<Item
						item={item}
						index={index}
						onDelete={() => delItem(index)} // Передаємо функцію видалення
					/>
				)}
			/>
		</View>
	);
}

// Компонент для відображення окремого елемента списку
export function Item({item, index, onDelete}) {
	return (
		<View style={styles.itemContainer}>
			<Pressable style={styles.itemLookArea}>
				<Text style={styles.itemTextName}>{item}</Text>
				<Text style={styles.itemTextDate}>Date</Text>
			</Pressable>
			<Pressable onPress={onDelete} style={styles.itemDelBtn}>
				{/* <Image style={styles.itemDelBtnImg} source={require("../img/icon-delete.svg")}></Image> */}
				<DeleteIcon style={styles.itemDelBtnImg} />
			</Pressable>
		</View>
	);
}
