import React, {useState} from "react";
import {styles} from "~/src/styles/styles";
import {Text, View, FlatList, Pressable} from "react-native";
import AddIcon from "../assets/icon-add.svg";
import {Item} from "./Item";
import {AddModal} from "./listModals/addModal";
import {DelModal} from "./listModals/delModal";

export function ClientList() {
	const [clients, setClients] = useState([]);

	// Додати елемент
	const addItem = () => {
		setClients([...clients, clientName]);
		setAddModal(true);
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
			<AddModal />
			{/* <DelModal /> */}
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
