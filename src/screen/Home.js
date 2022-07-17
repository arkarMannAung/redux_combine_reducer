import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../redux/name/nameActions';
import { setScore } from '../redux/score/scoreActions';

export default function Home() {
  const {name} = useSelector(state=>state.nameReducer);
  const {score} = useSelector(state=>state.scoreReducer);
  const dispatch = useDispatch();
  return (
    <View style={ {...styles.body,backgroundColor: 'pink'} }>
        <TextInput 
            style={styles.input} 
            onChangeText={ score=> dispatch( setScore( parseInt( score ) ) ) } 
            value={score} 
        />
        <TextInput 
            style={styles.input} 
            onChangeText={ text=> dispatch( setName(text) ) } 
            value={name} 
        />
        <Text style={ styles.text } >{name}</Text>
        <Text style={ styles.text } >{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'blue',
    paddingHorizontal: 20
  },
  input: {
    width: 150,
    fontSize: 18,
    backgroundColor: 'white',
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 15,
    marginBottom: 10
  }
});