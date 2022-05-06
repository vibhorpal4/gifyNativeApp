import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  Pressable,
} from 'react-native';
import colors from '../colors';

const {height, width} = Dimensions.get('window');

const CategorySlider = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      name: 'Trending',
    },
    {
      id: 2,
      name: 'Artists',
    },
    {
      id: 3,
      name: 'Clips',
    },
    {
      id: 4,
      name: 'Stories',
    },
    {
      id: 5,
      name: 'Sticker',
    },
    {
      id: 6,
      name: 'Emoji',
    },
    {
      id: 7,
      name: 'Text',
    },
    {
      id: 8,
      name: 'Reactions',
    },
  ];

  const rendererComponent = ({item}) => (
    <Pressable
      onPress={() =>
        navigation.navigate('SearchStack', {
          screen: 'Search',
          params: {search: item.name},
        })
      }
      style={styles.itemWrapper}>
      <Text style={styles.itemText}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.categoryHeading}>Popular Searches</Text>

      <FlatList
        data={data}
        renderItem={rendererComponent}
        keyExtractor={item => item.id}
        horizontal
        style={{height: '100%'}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
    width,
    height: '100%',
    paddingVertical: 5,
  },
  sliderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 1,
  },
  categoryHeading: {
    fontSize: 25,
    color: colors.textColor,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  itemWrapper: {
    width: 150,
    height: '90%',
    backgroundColor: colors.secondaryColor,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 2,
  },
  itemText: {
    color: colors.textColor,
    fontSize: 20,
  },
});

export default CategorySlider;
