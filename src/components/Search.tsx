import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  useNavigation,
  useRoute,
  RouteProp,
  NavigationProp,
} from '@react-navigation/native';
import {useDebouncedCallback} from 'use-debounce';
import styles from './styles';

type SearchProps = {
  onSearchChange: (text: string) => void;
};

const Search = ({onSearchChange}: SearchProps) => {
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebouncedCallback((text: string) => {
    onSearchChange(text);
  }, 1000);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <Image
          source={require('../../assets/icons/search.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Search for anything..."
          value={search}
          onChangeText={handleSearch}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Search;
