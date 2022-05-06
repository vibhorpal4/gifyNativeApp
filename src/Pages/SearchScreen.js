import {skipToken} from '@reduxjs/toolkit/dist/query';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors';
import {useGetGifsQuery} from '../redux/services/api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GifGrid from '../Components/GifGrid';

const {height, width} = Dimensions.get('window');

const SearchScreen = ({route, navigation}) => {
  const search = route.params;
  const [input, setInput] = useState(search ? search.search : '');
  const [query, setQuery] = useState('hello');
  const [offSet, setOffSet] = useState(0);
  const {data, isLoading, error, refetch} = useGetGifsQuery({
    query: input ? input : query ?? skipToken,
    offset: offSet ?? skipToken,
  });

  const loadMoreData = () => {
    setOffSet(offSet + 25);
  };

  // if (data) {
  //   console.log(data.data.length);
  //   console.log(offSet);
  // }

  const handleSubmit = () => {
    setQuery(input);
    console.log(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.searchWrapper}>
        <TextInput
          value={input}
          placeholder="Search Giphy"
          placeholderTextColor={'#aaa'}
          onChangeText={input => setInput(input)}
          style={styles.searchInput}
        />
        <Pressable onPress={handleSubmit} style={styles.searchIconWrapper}>
          <Ionicons name="search" size={20} color={colors.textColor} />
        </Pressable>
      </SafeAreaView>
      <View style={styles.listWrapper}>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primaryColor} />
        ) : (
          <>
            <GifGrid
              gifs={data?.data}
              refetch={refetch}
              isLoading={isLoading}
              loadData={loadMoreData}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: colors.backgroundColor,
  },
  searchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  searchInput: {
    color: 'black',
    width: '85%',
    backgroundColor: 'white',
    fontSize: 17,
  },
  searchIconWrapper: {
    backgroundColor: colors.primaryColor,
    width: '15%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listWrapper: {
    paddingTop: 15,
  },
});

export default SearchScreen;
