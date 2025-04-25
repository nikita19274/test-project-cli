import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ListRenderItem,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import Search from '../../components/Search';

type Starship = {
  name: string;
  url: string;
  model: string;
  consumables: string;
};

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/starships/')
      .then(res => res.json())
      .then(data => {
        setStarships(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error', err);
        setLoading(false);
      });
  }, []);

  const getIdFromUrl = (url: string) => {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  };

  const filteredStarships = starships.filter(s => {
    return s.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const renderItem: ListRenderItem<Starship> = ({item}) => {
    const id = getIdFromUrl(item.url);

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('StarshipDetails', {id, starship: item})
        }>
        <Text style={styles.name}>Name: {item.name}</Text>
        <Text>Model: {item.model}</Text>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Search onSearchChange={setSearchQuery} />
      <FlatList
        data={filteredStarships}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
