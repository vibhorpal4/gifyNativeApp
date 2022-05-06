import {skipToken} from '@reduxjs/toolkit/dist/query';
import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors';
import ProfileImage from '../assets/images/profile.png';
import GifGrid from '../Components/GifGrid';
import {useGetGifsQuery} from '../redux/services/api';

const {width, height} = Dimensions.get('window');

const AccountScreen = () => {
  const [offset, setOffSet] = useState(0);

  const {data, isLoading, error, refetch} = useGetGifsQuery({
    offset: offset ?? skipToken,
    query: 'happy',
  });

  const loadMoreData = () => {
    setOffSet(offset + 25);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image style={styles.profileImage} source={ProfileImage} />
        <Text style={styles.usernameText}>username</Text>
      </View>
      <View style={styles.listWrapper}>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primaryColor} />
        ) : (
          <GifGrid
            gifs={data.data}
            isLoading={isLoading}
            refetch={refetch}
            loadData={loadMoreData}
          />
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
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  profileWrapper: {
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
  },
  usernameText: {
    fontSize: 30,
    color: colors.textColor,
  },
  listWrapper: {
    height: '70%',
    // backgroundColor: colors.textColor,
  },
});

export default AccountScreen;
