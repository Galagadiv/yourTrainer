import {StyleSheet} from "react-native";

// https://colorhunt.co/palette/f8fafcd9eafdbcccdc9aa6b2

// F8FAFC
// D9EAFD
// BCCCDC
// 9AA6B2

export const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		backgroundColor: "#D9EAFD",
		borderBottomWidth: 0.5,
	},
	headerTitle: {
		fontSize: 22,
	},
	listControlPanel: {
		flexDirection: "row",
		gap: 20,
	},
	listControlBtns: {
		padding: 20,
		maxWidth: 125,
		backgroundColor: "#BCCCDC",
	},
	listControlBtnsText: {
		fontSize: 15,
	},
});
