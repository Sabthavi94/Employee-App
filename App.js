import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'
import EmployeeApp from './src/EmployeeApp';

const initialState={
  1:{
    empid: 1, 
    empname: "Employee One",
    empSalary: 10000.0
  },
  2:{
    empid: 2, 
    empname: "Employee Two",
    empSalary: 20000.0
  },
  3:{
    empid: 3, 
    empname: "Employee Three",
    empSalary: 30000.0
  },
  4:{
    empid: 4, 
    empname: "Employee Four",
    empSalary: 40000.0
  },
  5:{
    empid: 5, 
    empname: "Employee Five",
    empSalary: 50000.0
  },
}

const reducer= (state=initialState,action)=>{
  let initialSalary;
  let increment;
  let newSalary;
  let employeeObject;

  if(action.id){
    initialSalary= state[action.id].empSalary;
    increment = (initialSalary / 100) * 20;
  }

  switch(action.type){
    case "GOOD_PERFORMANCE":
      newSalary= initialSalary+increment;
      employeeObject= state[action.id];
      employeeObject.empSalary=newSalary;
      return Object.assign({},state);
    case "BAD_PERFORMANCE":
      newSalary= initialSalary-increment;
      employeeObject= state[action.id];
      employeeObject.empSalary=newSalary;
      // return a new object every single time
      return Object.assign({},state);
  }
  return state;
}

const store= createStore(reducer);

export default class App extends React.Component{

  render(){
  return (
    <Provider store={store}>
      <EmployeeApp />
    </Provider>
   );
  }
}

