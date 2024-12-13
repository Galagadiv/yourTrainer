import React, {useState} from "react";
import {styles} from "~/src/styles/styles";
import {Text, View, Pressable, Modal} from "react-native";

export function DelModal() {
	const [delModal, setDelModal] = useState(false);
	return (
		<Modal
			style={styles.addModalcontainer}
			animationType="slide"
			transparent={true}
			visible={delModal}
			onRequestClose={() => {
				setDelModal(false);
			}}
		>
			<Text style={styles.textStyle}>
				Are you sure you want to dalete this item?
			</Text>
			<View>
				<Text style={styles.textStyle}>clients[index]</Text>
			</View>
			<View>
				<Pressable onPress={() => setDelModal(false)}>
					<Text style={styles.textStyle}>Delete</Text>
				</Pressable>
				<Pressable onPress={() => setDelModal(false)}>
					<Text style={styles.textStyle}>Cancel</Text>
				</Pressable>
			</View>
		</Modal>
	);
}
