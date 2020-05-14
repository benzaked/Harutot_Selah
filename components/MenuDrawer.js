import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import global from './global'
import { Icon } from 'react-native-elements'

const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height 

export default class MenuDrawer extends React.Component {
    // constructor(props){
        
    //     super(props);
    //     this.state = {
    //         username: '',
    //         photoUrl: ''
    //     }
    // }
	navLink(nav, text) {
		return(
			<TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
    }
    componentWillMount(){
        // console.log('bla is ', global.photoUrl);
        // this.setState = {
        //     username: global.userName,
        //     photoUrl: global.photoUrl

        // }

    }
    
	render() {
        
		return(
			<View style={styles.container}>
				<ScrollView style={styles.scroller}>
					<View style={styles.topLinks}>
						<View style={styles.profile}>
							<View style={styles.imgView}>
                            
								<Image style={styles.img} source={{ uri : global.photoUrl}} />
							</View>
                            {/* "this.props.navigation.getParam.photoUrl" */}
							<View style={styles.profileText}>
                            <Text style={styles.name}>שלום {global.userName}</Text>
							</View>
						</View>
					</View>
					<View style={styles.bottomLinks}>
						<View style={styles.bottomButton}>
						<Icon name='home'/>	
						{this.navLink('Home', 'מסך הבית')}
						</View>
						<View style={styles.bottomButton}>
						<Icon name='navigation'/>
						{this.navLink('Game_menu', 'התחל את הפעילות באתר')}
						</View>
						<View style={styles.bottomButton}>
						<Icon name='image'/>
                        {this.navLink('SitesCatalog', 'התרשמות מחרותות')}
						</View>
						<View style={styles.bottomButton}>
						<Icon name='info'/>
                        {this.navLink('AboutScreen', 'אודות')}
						</View>
					</View>
				</ScrollView>
				<View style={styles.footer}>
					<Text style={styles.description}>Harutot Sela</Text>
					<Text style={styles.version}>v1.0</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray',
	},
	scroller: {
		flex: 1,
	},
	profile: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 25,
		borderBottomWidth: 1,
		borderBottomColor: '#777777',
	},
	bottomButton: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#777777',
		paddingStart: 20,
	},
	profileText: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	name: {
		fontSize: 20,
		paddingBottom: 5,
		color: 'white',
		textAlign: 'left',
		textShadowOffset: { width: 1, height: 1 },
  		textShadowRadius: 1,
		textShadowColor: '#62b1ea',
		fontWeight: '900',
	},
	imgView: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	img: {
		height: 70,
		width: 70,
		borderRadius: 50,
	},
	topLinks:{
		height: 160,
		backgroundColor: '#a5d3f3',
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: 'white',
		paddingBottom: 450,
		
	},
	link: {
		flex: 1,
		fontSize: 20,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
		textAlign: 'left',
	},
	footer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: 'lightgray'
	},
	version: {
		flex: 1, 
		textAlign: 'right',
		marginRight: 20,
		color: 'gray'
	},
	description: {
		flex: 1, 
		marginLeft: 20,
		fontSize: 16,
	}
})