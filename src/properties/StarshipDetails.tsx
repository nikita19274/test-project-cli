import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, UseDispatch} from 'react-redux';
import {addFavorite, removeFavorite} from '../redux/favoriteSlice';

type StarshipDetailsRouteProp = RouteProp<
  RootStackParamList,
  'StarshipDetails'
>;

const StarshipDetailsScreen = () => {
  const route = useRoute<StarshipDetailsRouteProp>();
  const {starship, id} = route.params;
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(starship.url));
    } else {
      dispatch(addFavorite(starship));
    }
    setIsFavorite(prev => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.idText}>ID: {id}</Text>
        <Text style={styles.title}>{starship.name}</Text>
        <Text style={styles.subtitle}>Model: {starship.model}</Text>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorite}>
          <Text style={styles.favoriteText}>
            {isFavorite ? 'Remove from the favorite' : 'Add to the favorite'}
          </Text>
          <Image
            source={require('../../assets/icons/heart.png')}
            style={styles.heartIcon}
            tintColor={isFavorite ? 'red' : '0061ff'}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.bottomButtonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StarshipDetailsScreen;
