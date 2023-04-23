import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrease, increase} from '../redux/reducer';

export default function Counter() {
  const dispatch = useDispatch();
  const details = useSelector(state => state.userdetailsReducer.value);

  console.log('count....', count);
  return (
    <View>
      <TouchableOpacity
        style={{backgroundColor: 'red', height: 30}}
        onPress={() => {
            dispatch(increase())

        }}>
        <Text>sdgsg</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <Button onPress={() => dispatch(decrease())} title="decre" />
    </View>
  );
}

const styles = StyleSheet.create({});
