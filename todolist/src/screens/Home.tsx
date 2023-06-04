import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function Home({ navigation }: HomeScreenProps){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('AddTask');}}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
      <Text>Hola desde Home :D</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  row: {
    flexDirection: 'row',
    marginBottom:10,
  },
  btn:{
    alignItems: 'center',
    backgroundColor: '#0080ff',
    bottom: 10,
    borderRadius: 40,
    elevation:5,
    height: 55,
    justifyContent:'center',
    position: 'absolute',
    right: 10,
    width: 55,
  },
  btnText:{
    color: 'white',
    fontSize:20,
    fontWeight:'bold',
  }
});

export default Home;