import React from 'react';
import { StyleSheet, Text, View,BackHandler, ImageBackground, ScrollView } from 'react-native';
import global from '../components/global'

import MenuButton from '../components/MenuButton'

export default class HomeScreen extends React.Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton() {
  // ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
  return true;
}
  render() {
    return (
     
      <ImageBackground source={{uri: 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/backgrounds%2FHome_Back.png?alt=media&token=90799c16-0803-4270-98de-2b9cf13b507a' }} style={styles.backgroundImage}> 
      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation} showIcon={true} />
      <View style={styles.TextSection}>
      <ScrollView persistentScrollbar={true} >
      <Text style={styles.textHeader}>
      רקע לחרותות הסלע ופירוט הפעולות באפליקציה
      {"\n"}
      </Text>
      <Text style={styles.text}>
      מצפור ליפא גל ממוקם בדרום הר מחיה ובו ניתן למצוא חרותות סלע אשר שימשו את האוכלוסייה המקומית במאות השנים האחרונות כאמצעי תקשורת בעל חשיבות תרבותית-כלכלית-חברתית. במהלך אלפי השנים האחרונות עברו דרך הנגב קבוצות נוודים רבות וביניהם גל בדואי אשר הביאו עימו מסורת של תקשורת באמצעות חרוטות סלע שהורכבו בעיקר מקבוצות של סימנים מופשטים ומכתובות ערביות. בין החרותות ניתן למצוא דמויות אדם רכובות על חמורים, סוסים וגמלים ,סצנות לחימה וציד ועוד. (Schmidt, Eisenberg-Degen & Nash, 2015).
      {"\n"}{"\n"}
      באפליקציית חרותות הסלע של הר מחיה תוכלו להכיר את הסיפור מאחורי הסלעים, מוזמנים להצטרף אלינו למסע. בלחיצה על התפריט מצד ימין למעלה תוכלו להתחיל את הפעילות או להתרשם מחרותות הסלע במקום.
       הפעילות באתר מציעה משחק אינטראקטיבי אשר ילווה אתכם במסלול הקצר או הארוך, תתרשמו מהפרשנויות השונות של המבקרים ותוכלו להוסיף התרשמות משלכם, תהנו מסיפורים ותענו על חידות באתרי החרותות שבדרך.
      בעמוד התרשמויות מחרותות תוכלו להתרשם מהתמונות ומהתגובות השונות גם כן.
      {"\n"}{"\n"}
      מקווים שיהיה לכם מסע פורה ומהנה באתר 😊

      </Text>
      </ScrollView>
      </View>       
      </View>
      </ImageBackground>  
    );
  }
}

const styles = StyleSheet.create({

  backgroundImage:{
    flex: 1,
    width: null,
    height: null,  
    resizeMode:'stretch',
  }, 
  container: {
    height: '100%',
    paddingBottom: '13%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  TextSection:{
    width:'80%',
    height: '63%',
    justifyContent: "center",
    alignItems: "center",
    
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    lineHeight: 20,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'black',
    fontWeight: '500',
  },

  textHeader: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    lineHeight: 25,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'black',
    fontWeight: '600',
  },

});

