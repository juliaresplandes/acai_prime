import { Feather, Octicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CardAcai from './components/CardAcai';
import Footer from './components/Footer';
import Header from './components/Header';
import CustomButton from './components/CustomButton';

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (name.trim() === '') {
      setMessage('Por favor, informe seu nome.');
    } else {
      setMessage(`Olá, ${name}! Pedido iniciado com sucesso.`);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        {/*Header */}
        <Header />
        {/*Header */}

        {/*Content*/}
        <View style={styles.content}>
          <View style={styles.grettingSection}>
            <Text style={styles.grettingTitle}>Refresque seu dia!</Text>
            <Text style={styles.grettingSubtitle}> Escolha seu açaí favorito de hoje </Text>
          </View>

          <View style={styles.feature}>
            <Image style={styles.img} source={require('./assets/acai-turbinado.png')}></Image>
            <View style={styles.featureTags}>
              <Text style={styles.featureTitle}>Açaí Turbinado 500ml</Text>
              <Text style={styles.featureTag}>MAIS PEDIDO</Text>
            </View>
            <Text style={styles.featureDesc}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
            <View style={styles.featureTags}>
              <Text style={styles.featurePrice}>R$ 22,90</Text>
              <TouchableOpacity style={styles.featureButton}>
                <Feather name="shopping-bag" size={14} color="white" />
                <Text style={styles.featureButtonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Nossos Copos & Tigelas</Text>

          <View style={styles.card}>
            <CardAcai img={require('./assets/acai-tradicional.png')} name='Açaí Tradicional' description='Açaí cremoso com banana e granola tradicional' price=' 14,00' />
            <CardAcai img={require('./assets/copo-tropical.png')} name='Copo Tropical' description='Camadas de açaí, morango, kiwi e leite em pó' price=' 18,50' />
            <CardAcai img={require('./assets/vitamina-acai.png')} name='Vitamina de Açaí' description='Bebida energética batida com guaraná e aveia' price=' 14,00' />
            <CardAcai img={require('./assets/acai-fit.png')} name='Açaí Fit Zero' description='Zero adição de açúcar, com chia e castanhas' price=' 16,90' />
          </View>

          <View style={styles.orderSection}>
            <Text style={styles.question}>Qual é o seu nome ?</Text>

            <View style={styles.input}>
              <Feather name="user" size={18} color="#644D6A" />

              <TextInput

                placeholder='Digite seu nome'
                value={name}
                onChangeText={setName}
              >
              </TextInput>
            </View>

            <CustomButton title='Fazer meu pedido' onPress={handleOrder} />

            {message !== '' && (
              <View  style={styles.message}>
                <Octicons style={styles.messageIcon} name="verified" size={20} color="green" />
                <Text style={styles.messageText}>
                  {message}
                </Text>

              </View>
            )}
          </View>

        </View>
        {/*Content*/}

        {/*Footer */}
        <Footer />
        {/*Footer */}

      </ScrollView>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF9FC'

  },
  content: {
    paddingHorizontal: 24,
    fontSize: 32,
  },
  grettingSection: {
    marginTop: 8,
    marginBottom: 24
  },
  grettingTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: '#2C1B30',
  },
  grettingSubtitle: {
    fontSize: 15,
    fontWeight: "400",
    color: '#644D6A'
  },
  feature: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginTop: 16,
    marginBottom: 20,
    padding: 18,
    shadowColor: '#2C1B300F',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  featureTags: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  img: {
    width: "100%",
    height: 185,
    marginBottom: 16,
    borderRadius: 16,

  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2C1B30',
  },
  featureDesc: {
    color: '#644D6A',
    fontSize: 13,
    fontWeight: "400",
    marginTop: 8,
    marginBottom: 8
  },
  featureTag: {
    backgroundColor: '#F3E5F5',
    color: '#7B1FA2',
    borderRadius: 6,
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    paddingLeft: 8,
    width: 89,
    height: 21,
    fontWeight: '900',
    fontSize: 11,
  },
  featurePrice: {
    color: '#7B1FA2',
    fontWeight: '900',
    fontSize: 22,
    marginTop: 14,
  },
  featureButton: {
    backgroundColor: '#7B1FA2',
    borderRadius: 20,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  featureButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12,
    marginLeft: 8
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',

  },
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  orderSection: {
    padding: 24,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    shadowColor: "#2C1B300F",
    shadowOffset: { width: 0, height: 8},
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10
  },
  question: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2C1B30'
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F1EDF4",
    borderRadius: 16,
    paddingHorizontal: 22,
    marginTop: 14,
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center'
  },
  message: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    paddingHorizontal:18,
    paddingVertical:12,
    marginTop: 12,
  },
  messageText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2E7D32",
    textAlign: "center",
  },
  messageIcon:{
    marginRight:2,
  }
});

