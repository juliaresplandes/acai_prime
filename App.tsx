import { Ionicons } from '@expo/vector-icons';
import {Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>

      {/*Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Açaí Prime</Text>
          <Text style={styles.headerSubtitle}>O sabor puro da Amazônia</Text>
        </View>
        <View>
          <Ionicons name='person' size={20} color="#2f2d2c"> </Ionicons>
        </View>
      </View>
      {/*Header */}

      {/*Content*/}
        <View style={styles.content}>
          <View style={styles.grettingSection}>
            <Text style={styles.grettingTitle}>Refresque seu dia!</Text>
            <Text style={styles.grettingSubtitle}> Escolha seu açaí favorito de hoje </Text>
          </View>

          <View style={styles.feature}>
            <Image source={require('./assets/acai-turbinado.png')}></Image>
          </View>

        </View>
      {/*Content*/}


    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'

  },
  header: {
    width: "100%",
    paddingTop:60,
    paddingHorizontal: 24, 
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:'center'
    
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2C1B30"
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#644D6A"
  },
  content:{
    paddingHorizontal:24,
    fontSize:32,
  },
  grettingSection: {
    marginTop:15,
    marginBottom:24
  },
  grettingTitle: {
    fontSize:32,
    fontWeight:"800",
    color:'#2C1B30',
  },
  grettingSubtitle:{
    fontSize:15,
    fontWeight:"400",
    color:'#644D6A'
  },
  feature:{
    backgroundColor:'#FFFFFF',
    shadowColor:'#2C1B300F',
    shadowOpacity:24,
    elevation:3
  }

});

