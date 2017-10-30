import React, {Component} from 'react';
// import logo from './logo.svg';
import {loadDictators} from '../src/_actions/dictatorActions'
import LoadingDots from './common/LoadingDots';
import DictatorList from './components/DictatorsList';
import {connect} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(event) {
    event.preventDefault();
    const {loadDictators} = this.props;
    loadDictators().then(resp => {
    }).catch(e => {
    })
  }

  render() {
    const {loading, dictators} = this.props;
    console.log(dictators);
    return (
      <div>
        <form className="navbar-form navbar-left" role="search" onSubmit={this.submit}>
          <button type="submit" className="btn btn-default">Show Dictators</button>
        </form>
        {loading && <LoadingDots interval={100} dots={20}/>}
        {!!dictators.length && <DictatorList dictators={dictators}/>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dictators: state.dictators,
    loading: state.numberOfServerCallsInProgress > 0
  };
};

export default connect(mapStateToProps, {loadDictators})(App);
