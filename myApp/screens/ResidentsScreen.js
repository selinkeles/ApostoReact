import { StyleSheet, Text, View, Button, FlatList ,ActivityIndicator } from 'react-native';
import {useEffect, useState} from "react";
import Resident from '../components/Resident';

export default function ResidentsScreen({ route, navigation }) {
  const { itemId, residents } = route.params;

  let [isLoading, setIsLoading] = useState(true);
  let [residentsList, setResidentsList] = useState([]);
  let [empty, setEmpty] = useState(false);

  const addItem = (item) => {
    residentsList.push(item)
    setResidentsList([...residentsList])
  };

  useEffect(() => {
    if(residents.length === 0) {
       setIsLoading(false);
       setEmpty(true);
    }
    residents.forEach( async (element) => {
        const response = await fetch(element);
        const json = await response.json();
        if(residentsList.indexOf(json) === -1) {
            addItem(json)
        }
        console.log(residents.length)
        if(residentsList.length === residents.length) {
            setIsLoading(false);
        }
    });
  }, []);

  return (
    <View style={styles.container}>
    {isLoading ? <ActivityIndicator size="large" /> :
      (empty ? <Text style={styles.noText}>This location has no resident</Text> :
          <FlatList data={residentsList}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (<Resident resident={item} />)}/>)
    }
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    //alignItems: 'center',
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  noText: {
    margin: '10%',
  },
});