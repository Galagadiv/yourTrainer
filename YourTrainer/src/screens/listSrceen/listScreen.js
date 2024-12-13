import React from "react";
import Header from "~/src/components/header";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ClientList} from "./clientsList";

export default function ListScreen() {
	return (
		<SafeAreaProvider>
			<Header />
			<ClientList />
		</SafeAreaProvider>
	);
}
