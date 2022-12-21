import { StyleSheet, Text, View , ScrollView , ActivityIndicator} from 'react-native';
import Location from '../components/Location';
import {useEffect, useState} from "react";
import { TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {

    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();
    let [get, setGet] = useState(false);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location")
        .then(res => res.json())
        .then(
            (result) => {
            console.log(result)
            setIsLoading(false);
            setResponse(result);
            setGet(true);
            },
            (error) => {
            setIsLoading(false);
            setError(error);
            })
    }, []);

    const getContent = () => {
        if(isLoading) {
            return <ActivityIndicator size="large" />;
        }
        if(error) {
            return <Text>{error}</Text>
        }
        console.log(response)
    };

    return (
    <View style={styles.container}>
        {getContent()}
        <ScrollView>
        <View style={styles.locationsWrapper}>
            <View style={styles.items}>
            {get? 
            <>{response.results.map((loc) => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate("Residents", {
                    itemId: loc.id,
                    residents: loc.residents,})}>
                    <Location
                      location={loc.name}
                      type={loc.type}
                      dimension={loc.dimension}
                      resCount={loc.residents.length}
                      />
                  </TouchableOpacity>)
                })}
                </>
                :<>
                <ActivityIndicator size="large" />
                </>}
            </View>
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8EA9AE',
  },
  locationsWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  locationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  }
});

