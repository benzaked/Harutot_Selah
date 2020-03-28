import React from 'react'
import { StyleSheet, Text,View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class MenuButton extends React.Component {
	render() {
		return(
			<View style={styles.menuIcon}>
			{this.props.showIcon ? (
			<Ionicons
				name="md-menu"
				color="#000000"
				size={32}
				
				onPress={() => this.props.navigation.toggleDrawer()}
			/>
			):(<Text></Text>)
		}
		</View>
		)
	}
}

const styles = StyleSheet.create({
	menuIcon: {
		zIndex: 9,
		position: 'absolute',
		top: 40,
		left: 20,
	}
})