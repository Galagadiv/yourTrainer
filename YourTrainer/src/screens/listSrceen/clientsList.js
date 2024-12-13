import React, {useState} from "react";
import {styles} from "../styles/styles";
import {Text, View, FlatList, Pressable, Modal, TextInput} from "react-native";
import DeleteIcon from "../img/icon-delete.svg";
import AddIcon from "../img/icon-add.svg";

export function DynamicList() {
	const [clients, setClients] = useState([]);
	const [addModal, setAddModal] = useState(false);

	const [clientName, onChangeText] = React.useState("Useless Text");

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
			<Modal
				style={styles.addModalcontainer}
				animationType="slide"
				transparent={true}
				visible={addModal}
				onRequestClose={() => {
					setAddModal(false);
				}}
			>
				<TextInput
					//   style={styles.addModalInput}
					onChangeText={onChangeText}
					value={clientName}
				/>
				<Pressable
					// style={[styles.button, styles.buttonClose]}
					onPress={() => setAddModal(false)}
				>
					<Text style={styles.textStyle}>Hide Modal</Text>
				</Pressable>
			</Modal>
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
				<DeleteIcon style={styles.itemDelBtnImg} />
			</Pressable>
		</View>
	);
}
