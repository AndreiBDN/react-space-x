import React, {Component} from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
// import Details from './components/details/Details';
import './style.css'
// import Calendar from './components/calendar/Calendar';

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
      <>
      <Header
      changeRocket={this.changeRocket}
      rocketNames={this.state.rocketNames} />
      <Main rocket={this.state.rocket}/>
      <Features
        rocketFeatures={this.state.rocketFeatures}
      />
      <Footer 
      company={this.state.company}
      />
  
      </>
    );
  }
}

export default App;
