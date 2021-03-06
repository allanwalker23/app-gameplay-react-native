import React from 'react';
import { useState } from 'react';
import {View, FlatList,Text} from 'react-native';
import Appointment from '../../components/Appointments';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import  Profile  from '../../components/Profile';
import Background  from '../../components/Background';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
const Home:React.FC = () =>{
  const [category, setCategory] = useState('');
  const navigation = useNavigation()
  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
  ]
 
    function handleCategorySelect(categoryId: string) {
      categoryId === category ? setCategory('') : setCategory(categoryId);
    }  

    function handleAppointmentDetails(){
      navigation.navigate('AppointmentDetails')
    }

    function handleAppointmentCreate(){
      navigation.navigate('AppointmentCreate')
    }


    return(
      <Background>
      <View>
      <View style={styles.header}>
        <Profile name="Allan" />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
    
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader 
          title="Partidas agendadas"
          subtitle="Total 6"
        />

      
      </View>
    </View>
    <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
            <Appointment
             data={item}
             onPress={handleAppointmentDetails}
          />            
          
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          contentContainerStyle={{paddingBottom:69}}
          showsVerticalScrollIndicator={false}
        />
    </Background>
  );  
}

export default Home;