import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const Navbar = () => {
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View>
        <View style={styles.top}>
          <Text style={styles.title}>WELLING</Text>
        </View>
        <View style={styles.nav}>
          <View style={styles.input}>
            <TextInput
              style={styles.search}
              placeholder='eg: disorder'
            />
          </View>
          <TouchableOpacity style={styles.icon}>
                <MaterialIcons name='search' size={30} color='black'/>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  //   borderRadius: 5,
  //   marginBottom: 10,
  //   flexDirection: 'row'
    nav:{
        backgroundColor: 'white',
        height: 50,
        display: 'inline',
        borderRadius: 30,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexdirection: 'row',
        elevation: 10,
        marginBottom: 20
    },
    input:{
      marginLeft: 15,
      width: '80%',
      borderRadius: 10,
      marginTop: 7.5,
    },
    search:{
      fontSize: 25,
      color: 'black'
    },
    icon:{
      marginLeft: 275,
      marginTop: -30
    },
    title:{
      fontSize: 40,
      color: 'orchid',
      fontWeight: 'bold'
  },
  top:{
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})

export default Navbar