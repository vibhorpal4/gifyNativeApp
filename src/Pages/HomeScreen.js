import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Image,
  Button,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors';
import Feather from 'react-native-vector-icons/Feather';
import CategorySlider from '../Components/CategorySlider';
import {useGetGifsQuery} from '../redux/services/api';
import GifGrid from '../Components/GifGrid';
import {skipToken} from '@reduxjs/toolkit/dist/query';

const {height, width} = Dimensions.get('window');

const HomeScreen = () => {
  const [offSet, setOffSet] = useState(0);
  const {data, isLoading, error, refetch} = useGetGifsQuery({
    offSet: offSet ?? skipToken,
    query: 'popular',
  });

  // const [gifs, setGifs] = useState(data?.data);

  // if (data) {
  //   console.log(data.data.length);
  //   console.log(offSet);
  // }

  const loadPagination = () => {
    setOffSet(offSet + 25);
  };

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.logoText}>GIPHY</Text>
        </View>
        <View style={styles.rightHeader}>
          <Text style={styles.createText}>Create</Text>
          <Feather name="camera" size={30} color={colors.primaryColor} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        > */}
      <View style={styles.categorySliderWrapeer}>
        <CategorySlider />
      </View>
      {/* </ScrollView> */}

      <Text style={styles.trendingHeading}>Trending Gifs</Text>
      {/* <ScrollView> */}
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.primaryColor} />
      ) : (
        <>
          <GifGrid
            gifs={data.data}
            refetch={refetch}
            isLoading={isLoading}
            loadData={loadPagination}
          />
        </>
      )}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: colors.backgroundColor,
    marginBottom: 50,
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  logoText: {
    color: colors.textColor,
    fontSize: 30,
  },
  rightHeader: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  createText: {
    color: colors.textColor,
    marginHorizontal: 15,
    fontSize: 20,
  },
  categorySliderWrapeer: {
    height: '18%',
    marginVertical: 5,
  },
  trendingHeading: {
    fontSize: 25,
    color: colors.textColor,
    paddingHorizontal: 5,
  },
  image: {
    width: '49.8%',
    height: 135,
    marginHorizontal: '0.1%',
    marginVertical: '0.1%',
  },
});

export default HomeScreen;
