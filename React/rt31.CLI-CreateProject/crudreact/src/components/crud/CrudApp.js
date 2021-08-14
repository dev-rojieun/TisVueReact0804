import React from "react";

import CrudInput from "./CrudInput";
import CrudList from "./CrudList";


class CrudApp extends React.Component {
  state = {
      // 상태값(변수)을 정의한다.
      items : [
              {id:1, name: "슈퍼맨", power: 100},
              {id:2, name: "아쿠아맨", power: 300},
              {id:3, name: "스파이더맨", power: 500},
              {id:4, name: "배트맨", power: 30},
          ]
  }
  func = {
      // func에 정의된 메서드는 반드시 constructor에서 this를 bind() 처리해야 한다.
      // func에는 자식 컴포넌트에 넘길 메서드만 작성한다.
      // 왜 자식에게 부모 메서드를 넘기나? 부모의 상태값을 변경하기 위해서.
      doDel (index, item) {
          const r = window.confirm("정말 삭제하시겠습니까?");
          if (!r) return;

          const newitems = this.state.items.filter ( (element) => {
              return element.id !== item.id;
          });

          this.setState({
              ...this.state,
              items : newitems,
          });
      },
      doUp(index, item){
          const newitems = this.state.items.map ( (element) => {
              if(item.id === element.id ) {
                  element.power = element.power + 100;
              }
              return element;
          });
          this.setState({
              ...this.state,
              items : newitems,
          });
      },
      doDown(index, item){
          const newitems = this.state.items.map ( (element) => {
              if(item.id === element.id ) {
                  element.power = element.power - 50;
              }
              return element;
          });
          this.setState({
              ...this.state,
              items : newitems,
          });
      },
      doSave(newitem){
          const newitems = this.state.items.map ( (element) => {
              if(element.id === newitem.id) {
                  return newitem
              }
              else
              {
                  return element
              }
          });
          this.setState({
              ...this.state,
              items : newitems,
          });
      },
      doIns(newItem) {
          // debugger;

          // id 설정을 위해 최댓값을 구한다.
          var maxObj = (this.state.items.length ===  0) ? 1 : this.state.items.reduce( function(prev, curt){
              return prev.id > curt.id ? prev :  curt  // 최대값 id가 있는 객체
              //return prev.id < curt.id ? prev :  curt  // 최소값 id가 있는 객체
          })


          // 새로운 값에 아이디를 주기 위해 최대값+1을 지정한다.
          var newid  = maxObj.id + 1;
          newItem.id = newid;

          // 스프레드 , push 로 새로운 배열 만들기
          //  this.state.items.push(newitem); const newitems = [...this.state.items];
          const newitems = [...this.state.items, newItem];

          this.setState({
              ...this.state,
              items : newitems,
          });

      }
  }
  constructor(props) {
      super()
      // this 바인딩. 예시) this.func.handler = this.func.handler.bind(this)
      // func 에 정의한 메서드는 반드시 this bind 처리해야 한다.
      this.func.doDel = this.func.doDel.bind(this);
      this.func.doUp = this.func.doUp.bind(this);
      this.func.doDown = this.func.doDown.bind(this);
      this.func.doSave = this.func.doSave.bind(this);
      this.func.doIns = this.func.doIns.bind(this);
      // ref 만들기. 예시) this.inputref = React.createRef()
  }
  render() { // JSX로 화면 만들기
      return (
          <div>
              <br />
              <h1>Creat Read Update Delete</h1>
              <CrudInput {...this.state} {...this.func} {...this.props}></CrudInput>
              <hr/>
              <CrudList {...this.state} {...this.func} {...this.props}></CrudList>
          </div>
      )
  }
};

export default CrudApp;