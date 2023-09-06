import { View } from 'react-native'
import Home from './pages/home';
import Navbar from './pages/navbar';

export default function App() {
  return (
    <View>
      <Navbar/>
      <Home/>
    </View>
  );
}