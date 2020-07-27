import React from 'react';
import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Trainings from '../components/Trainings/Trainings';
import MyModels from '../components/MyModels/MyModel';
import AlertMessage from './AlertMessage/AlertMessage';
import { connect } from 'react-redux';

class Home extends Component {

    render(){
        return(
            <div className="content">
          
                <Switch>
                    <Redirect exact from="/" to="/trainings" />
                    <Route path="/trainings" component={ Trainings }/>
                    <Route path="/models" component={ MyModels } />
                </Switch>
                
                { this.props.messageText &&
                    <AlertMessage />
                }

          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messageText: state.alertReducer.messageText
});

export default connect(mapStateToProps, null)(Home);