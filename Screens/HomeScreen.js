// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getAPIdata = async () => {
    try {
      const url = 'http://10.0.2.2:3000/products';
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>PRODUCT</Text>
      {data.length ? (
        data.map((item, index) => (
          <View key={index} style={[styles.productCard, { backgroundColor: 'black' }]}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
            <Text style={styles.productText}>Description: {item.description}</Text>
            <Text style={styles.productText}>Price: ${item.price}</Text>
            <Text style={styles.productText}>Discount: {item.discountPercentage}%</Text>
            <Text style={styles.productText}>Rating: {item.rating}</Text>
            <Text style={styles.productText}>Stock: {item.stock}</Text>
            <Text style={styles.productText}>Brand: {item.brand}</Text>
            <Text style={styles.productText}>Category: {item.category}</Text>
            <Text style={styles.productText}>Images:</Text>
            <View style={styles.imageContainer}>
              {item.images.map((image, imageIndex) => (
                <Image key={imageIndex} source={{ uri: image }} style={styles.productImage} />
              ))}
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noData}>No data available</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productCard: {
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  productText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    width: 300,
  },
  productImage: {
    width: 320,
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
  noData: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
});

export default HomeScreen;
