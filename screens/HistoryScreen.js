import { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function HistoryScreen({route}) {
    const { history } = route.params;
    console.log(history);

    return (
        <View style={styles.container}>
            <FlatList 
                data={history} 
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.text}>{item.key}</Text>} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  text: {
    padding: 5,
    color: 'white',
    fontSize: 20,
  }
});
