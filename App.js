import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';

import Home from './components/Home'

import {
  Container
} from  './constants/appStyles'

export default function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

