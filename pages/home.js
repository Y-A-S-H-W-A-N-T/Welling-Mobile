import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <View style={styles.para_box}>
        <Text style={styles.para}>By asking a series of targeted questions, it assesses risk factors and symptoms,
              providing users with early warnings and enabling timely medical intervention, 
              ultimately promoting proactive health management and well-being.
        </Text>
      </View>
      <TouchableOpacity  style={styles.button} onPress={()=>console.log('Button Pressed')}>
        <View>
          <Text style={styles.button_name}>TAKE TEST</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
      fontSize: 40,
      color: 'orchid',
      fontWeight: 'bold'
  },
  top:{
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  para:{
    textAlign: 'justify',
    color: 'white',
    fontSize: 20
  },
  para_box:{
    backgroundColor: 'lightgreen',
    padding: 30,
    elevation: 10
  },
  button:{
    backgroundColor: 'rgb(71, 171, 71)',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    padding: 5,
    elevation: 20
  },
  button_name:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  }
})

export default Home