import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Main from './components/main/Main';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Details from './components/details/Details';
import './style.css'
import Calendar from './components/calendar/Calendar';

import FetchData from './service/fetch-data';


class App extends Component {

  fetchData = new FetchData();


  state = {
    rocket: "Falcon 1",
    rocketFeatures: null,
    rocketNames : [],
    company: null,
  }

  updateRocket(){

    this.fetchData.getRocket()
    .then(data => {
      this.setState({rocketNames: data.map(item => item.name)})
      return data
    })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {this.setState({rocketFeatures})});
    
  }

  changeRocket = (rocket) => {
    this.setState({rocket}, this.updateRocket)
  }
  
  getCompanyInfo(){
    this.fetchData.getCompany()
    .then(company => {this.setState({company})})
    
  }

  componentDidMount(){
    this.updateRocket();
    this.getCompanyInfo();
  }

  render() {
    
    return (
      <BrowserRouter>
      <Header
      changeRocket={this.changeRocket}
      rocketNames={this.state.rocketNames} />

      <Route exact path='/'>
        {this.state.company ? <Home company={this.state.company} /> : null}
      </Route>

      <Route exact path='/rocket'>
        <Main rocket={this.state.rocket}/>
        {this.state.rocketFeatures ? <Features rocketFeatures={this.state.rocketFeatures} /> : null }
      </Route>

      <Route exact path='/calendar'>

        <Calendar />
      </Route>

      <Route exact path='/details'>
        <Details />
      </Route>

      {this.state.company ? <Footer company={this.state.company} /> : null}
  
      </BrowserRouter>
    );
  }
}

export default App;
