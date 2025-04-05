import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import { useState } from 'react';
import MyButton from '../../components/button';



export default function Home(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);
    const calcular = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if(!isNaN(n1) && !isNaN(n2)){
            setResultado(n1 * n2);
        }else{
            setResultado('Insira números válidos');
        }
    
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Multiplicador de Números </Text>

            <TextInput style={styles.input} placeholder='Digite o primeiro numero' keyboardType='numeric' value={num1} onChangeText={setNum1}/>

            <TextInput style={styles.input} placeholder='Digite o segundo numero' keyboardType='numeric' value={num2} onChangeText={setNum2}/>

            <MyButton title='Calcular' onPress={calcular} />
            {resultado !== null && (
                 <Text style={styles.resultado}>{resultado}</Text>
            )}
        </View>

    )

}
