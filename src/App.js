import React , { Component } from 'react';
import Header from './components/header/header'
import Main from './components/main/main'
import Global from './components/global/global'
import Platform from './components/platform/platform'
import Improve from './components/improve/improve'
import More from './components/more/more'
import Finfin from './components/finfin/finfin'
import Samir from './components/samir/samir'
import Aydi from './components/aydi/aydi'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Main/>
       <Global/>
       <Platform/>
       <Improve/>
       <More/>
       <Finfin/>
       <Samir/>
       <Aydi/>
      </div>
    );  
  }
}

export default App;
