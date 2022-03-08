import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import {
  ListView,
  TodoText,
  TodoDate,
  TodoPriority,
  ListTouchable,
  TextListEmpty,
  TextAligmentList,
} from "../constants/appStyles";

const ListToDo = ({ toDoList, setToDoList }) => {

    const handleDelete = (key) => {
        const newToDo = [...toDoList];
        const ToDoIndex = toDoList.findIndex((toDo) => toDo.key === key);
        newToDo.splice(ToDoIndex,1);
        setToDoList(newToDo)
    }

  return (
    <ListView>
      <FlatList
        data={toDoList}
        renderItem={(data) => (
          <ListTouchable 
          onPress={() => handleDelete(data.item.key)}
          style={{backgroundColor: data.item.priority == 'Alta' ? 'red' : data.item.priority == 'Media' ? 'yellow' : 'green'}}
          >
            <TodoText
            style={{color: data.item.priority == 'Alta' ? 'black' : data.item.priority == 'Media' ? 'black' : 'black'}}
            >{data.item.name}
            </TodoText>
            <TodoPriority
            style={{color: data.item.priority == 'Alta' ? 'black' : data.item.priority == 'Media' ? 'black' : 'black'}}
            > Prioridad: {data.item.priority}
            </TodoPriority>
            <TodoDate
            style={{color: data.item.priority == 'Alta' ? 'black' : data.item.priority == 'Media' ? 'black' : 'black'}}
            >
                {data.item.fecha}
            </TodoDate>
          </ListTouchable>
        )}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={<TextAligmentList><TextListEmpty>La lista está vacía</TextListEmpty></TextAligmentList>}
      />
    </ListView>
  );
};

export default ListToDo;
