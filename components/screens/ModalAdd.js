import React, { useState } from "react";
import { Modal, TextInput } from "react-native";

import {
  ModalView,
  ModalIcon,
  HeaderTitle,
  colors,
  StyledInput,
  TextTitleInputs,
  ModalContainer,
  ModalActionGroup,
  ModalAction,
  PriorityTouchable,
  TextTouchable,

  
} from "../../constants/appStyles";

import { AntDesign } from "@expo/vector-icons";

const ModalAdd = ({ activeAddModal, setActiveAddModal, handleAddToDo }) => {
  const handleClose = () => setActiveAddModal(false);

  const [tarea, setTarea] = useState('');
  const [fecha, setFecha] = useState('');
  const [prioridad, setPrioridad] = useState('');

  const sendTodo = () => {
    if(tarea != "" && fecha != "" && prioridad != ""){
        const tareaIntroducida = {
            name: tarea,
            fecha: fecha,
            priority: prioridad,
            key: String(Math.random())
        }
        handleAddToDo(tareaIntroducida)

        setTarea('')
        setFecha('')
        setPrioridad('')
        
    }else{
        alert("Algunos de los campos están vacíos, revise e íntentelo de nuevo...")
    }

  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={activeAddModal}
        onRequestClose={() => handleClose()}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle>Añadir nueva tarea</HeaderTitle>
              <AntDesign name="book" size={30} color={colors.tertiary} />
            </ModalIcon>
            <TextTitleInputs> Indique nombre de la tarea:</TextTitleInputs>
            <StyledInput
              placeholder="Escriba el nombre de la tarea"
              placeholderTextColor={colors.alternative}
              selectionColors={colors.secondary}
              autoFocus={false}
              value={tarea}
              onChangeText={(text) => setTarea(text)}
            />

            <TextTitleInputs> Indique la fecha máxima:</TextTitleInputs>
            <StyledInput
              placeholder="Escriba la fecha"
              placeholderTextColor={colors.alternative}
              selectionColors={colors.secondary}
              autoFocus={false}
              value={fecha}
              onChangeText={(text) => setFecha(text)}
            />

            <TextTitleInputs> Indique la prioridad de la tarea:</TextTitleInputs>

            <ModalActionGroup>
                <PriorityTouchable
                activeOpacity={0.6}
                style={{backgroundColor: 'red'}}
                onPress={() => setPrioridad('Alta')}
                >
                   <TextTouchable>Alta</TextTouchable>
                </PriorityTouchable>
                <PriorityTouchable
                activeOpacity={0.6}
                style={{backgroundColor: 'yellow'}}
                onPress={() => setPrioridad('Media')}
                >
                   <TextTouchable>Media</TextTouchable>
                </PriorityTouchable>
                <PriorityTouchable
                activeOpacity={0.6}
                style={{backgroundColor: 'green'}}
                onPress={() => setPrioridad('Baja')}
                >
                   <TextTouchable>Baja</TextTouchable>
                </PriorityTouchable>
                
                   
            </ModalActionGroup>
           

            <ModalActionGroup>
                <ModalAction color={colors.primary} onPress={sendTodo}>
                    <AntDesign name="check" size={28} color={'green'} />
                </ModalAction>

                <ModalAction color={colors.primary} onPress={handleClose}>
                    <AntDesign name="close" size={28} color={'red'} />
                </ModalAction>
            </ModalActionGroup>

            
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ModalAdd;
