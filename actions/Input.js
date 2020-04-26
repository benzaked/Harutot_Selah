import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Text,
  View, TouchableOpacity,ScrollView
} from 'react-native';
import PropTypes from 'prop-types'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

export default class Input extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    text: undefined, // user's input
  };

  // Update state when input changes
  onChangeText = (text) => this.setState({ text });

  // Handle return press on the keyboard
  // NOTE: You don't really need it for this example, because
  // we're using a keyboard without return button, but I left it here
  // in case you'd want to switch to a different keyboard
  onSubmitEditing = ({ nativeEvent: { text } }) => this.setState({ text }, this.submit);

  // Call this.props.onSubmit handler and pass the comment
  submit = () => {
    const { text } = this.state;
    if (text) {
      this.setState({ text: undefined }, () => this.props.onSubmit(text));
    } else {
      alert('תחילה הזן בבקשה את התגובה');
    }
  };

  render() {
    return (
      // This moves children view with input field and submit button
      // up above the keyboard when it's active
      <KeyboardAwareScrollView
        style={{fles: 1}}
        behavior='padding'
        enabled={true}>
          <ScrollView>
            <View  style={styles.container}>
              {/* Comment input field */}
              <TextInput
                placeholder="חרותת הסלע מזכירה לי..."
                placeholderTextColor='#777777'
                keyboardType="twitter" // keyboard with no return button
                autoFocus={true} // focus and show the keyboard
                style={styles.input}
                value={this.state.text}
                onChangeText={this.onChangeText} // handle input changes
                onSubmitEditing={this.onSubmitEditing} // handle submit event
              />
              {/* Post button */}
              <TouchableOpacity
                style={styles.button}
                onPress={this.submit}
              >
                {/* Apply inactive style if no input */}
                <Text style={[styles.text, !this.state.text ? styles.inactive : []]}> פרסם </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          
        </KeyboardAwareScrollView>
      
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // backgroundColor: "#daedf9", 
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth:1,
    borderColor: '#526674',
    alignItems: 'center',
    paddingLeft: 15,
    marginBottom: 20,
    elevation: 3,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 15,
  },
  button: {
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactive: {
    // color: '#CCC',
    color: '#526674',
  },
  text: {
    color: '#3F51B5',
    fontWeight: 'bold',
    fontStyle: "italic",
    textAlign: 'center',
    fontSize: 15,
  },
});