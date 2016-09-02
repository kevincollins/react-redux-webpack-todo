import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/todoAction'

class App extends Component {
  render() {
    const { todoList, actions } = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todoList={todoList} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  todoList: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todoList: state.xxx
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
