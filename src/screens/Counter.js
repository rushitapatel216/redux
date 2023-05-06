import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrease, increase} from '../redux/reducer';
import {getUserDetails} from '../api/userDetails';
import {dummyData} from '../dummyData';

export default function Counter() {
  const dispatch = useDispatch();
  const details = useSelector(
    state => state.userdetailsReducer.userdetails_data,
  );
  // const totalPages = useSelector(state => state.userdetailsReducer.totalpage);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const totalPages = Math.ceil(dummyData.length / 8);

  useEffect(() => {
    getDetails();
  }, []);
  useEffect(() => {
    setData(dummyData?.slice(0, page * 8));
  }, [details]);

  const getDetails = async () => {
    await getUserDetails(dispatch);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    if (totalPages >= nextPage) {
    setLoading(true);
      const newData = dummyData?.slice(page * 8, nextPage * 8)
      setData([...data, ...newData]);    
      setLoading(false);
      setPage(page+1)
    }
  };

  const ListEmptyComponent = () => {
    return (
    <View>
    {loading && <ActivityIndicator size={'50'} />}
    </View>
    )
  };
  console.log('data...',  data?.length);

  return (
    <View style={styles.container}>
      <FlatList
        style={{flex: 1}}
        onEndReachedThreshold={0.5}
        data={data}
        onEndReached={handleLoadMore}
        ListFooterComponent={ListEmptyComponent}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          return (
            <View style={styles.itemContainer}>
              <Text>dsjhf</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  itemContainer: {
    height: 200,
    width: 200,
    backgroundColor: 'pink',
    marginTop: 10,
  },
});
