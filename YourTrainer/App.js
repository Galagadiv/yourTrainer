import React from "react";
import Header from "./components/header";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {DynamicList} from "./components/clientsList";
import {styles} from "./components/styles";

export default function App() {
	return (
		<SafeAreaProvider>
			<Header />
			<DynamicList></DynamicList>
		</SafeAreaProvider>
	);
}
