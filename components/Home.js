
import React, {useState} from 'react';
import Header from './Header';

import ListToDo from './ListToDo';
import ModalAdd from './screens/ModalAdd';
import {AddButton, colors} from '../constants/appStyles'


import {AntDesign} from '@expo/vector-icons';

const Home = () => {

    const toDo = [
    ];

    const [ toDoList, setToDoList] = useState(toDo);
    const [ activeAddModal, setActiveAddModal] = useState(false);
    const openModal = () => setActiveAddModal(true);

    const handleAddToDo = (newToDo) => {
        console.log(newToDo);
        setToDoList((currentTodo) => [newToDo, ...toDoList]);
        setActiveAddModal(false);
    }
    
    return(
        <>
            <Header />
            <ListToDo 
                toDoList={toDoList}
                setToDoList={setToDoList}
            />
            <ModalAdd 
                activeAddModal={activeAddModal}
                setActiveAddModal={setActiveAddModal}
                handleAddToDo={handleAddToDo}
            />
            <AddButton>
                <AntDesign name="plus" size={30} color={colors.primary} onPress={ () => openModal() } />
            </AddButton>
        </>
    );
}

export default Home;