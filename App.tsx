import { Ionicons } from '@expo/vector-icons';
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

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
    paddingTop:24,
    
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2C1B30"
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#644D6A"
  }


});

