import React, {useState} from "react";
import {styles} from "~/src/styles/styles";
import {Text, View, Pressable, Modal, TextInput} from "react-native";
import AddIcon from "../assets/icon-add.svg";
import {Item} from "./Item";

export function AddModal() {
	const [addModal, setAddModal] = useState(false);
	const [clientName, onChangeText] = React.useState("");
	return (
		<Modal
			style={styles.addModalcontainer}
			animationType="slide"
			transparent={true}
			visible={addModal}
			onRequestClose={() => {
				setAddModal(false);
			}}
		>
			<TextInput onChangeText={onChangeText} value={clientName} />
			<Pressable onPress={() => setAddModal(false)}>
				<Text style={styles.textStyle}>Hide Modal</Text>
			</Pressable>
		</Modal>
	);
}
