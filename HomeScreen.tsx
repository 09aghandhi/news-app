import React from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import { Button, Card } from 'react-native-paper';

const articles = [
  {
    id: '1',
    title: 'Breaking News: You and Me 😘',
    description: 'We’ve got the hottest news around... It’s about us, baby. 🔥',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'Breaking Hearts, One Story at a Time 💔',
    description: 'I’m falling for you, and the headlines aren’t the only thing hot. 😏',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'Hot News: We’re Changing The Game 🔥',
    description: 'Forget everything you know... we’re about to revolutionize the game. 😘',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    title: 'This Love Is Going Viral 😍',
    description: 'And so are we, baby. Can’t stop us now. 💋',
    image: 'https://via.placeholder.com/150',
  },
];


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Image source={{ uri: "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png" }} style={styles.image} />
            <Card.Content>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => alert('Let’s get into this article, baby!')}>
                Read More
              </Button>
            </Card.Actions>
          </Card>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f9f9f9',
  },
  card: {
    margin: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 0,
    shadowColor: 'transparent',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});


