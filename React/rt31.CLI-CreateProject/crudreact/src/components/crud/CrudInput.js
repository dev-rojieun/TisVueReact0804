import React from "react";

class CrudInput extends React.Component {

  constructor(props) {
      super()
      // this 바인딩. 예시) this.func.handler = this.func.handler.bind(this)
      // func 에 정의한 메서드는 반드시 this bind 처리해야 한다.

      // ref 만들기. 예시) this.inputref = React.createRef()
      // input 의 값을 가져오기 위해 ref 설정 하고 여기서 셋팅해줘야한다.
      this.refInputName  = React.createRef();
      this.refInputPower = React.createRef();
  }

  doIns = (event)=>{
      // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
      // 1. 부모 메서드 호출

      // 유효성검사
      if(this.refInputName.current.value.trim() === ''){
          alert ('이름을 입력해주세요.')
          this.refInputName.current.focus();
          event.preventDefault();
          event.stopPropagation();
          return false;
      }

      if(this.refInputPower.current.value.trim() === '' && !isNaN(this.refInputPower.current.value.trim()) ){
          alert ('파워을 확인해주세요. (숫자만)')
          this.refInputPower.current.focus();
          event.preventDefault();
          event.stopPropagation();
          return false;
      }


      const newitem = {
          name : this.refInputName.current.value,
          power : Number(this.refInputPower.current.value)
      };
      this.props.doIns(newitem);

      // 2. Add Button 을 클릭 후 Input Value 지우기 - ref 는 사용자가 직접 만드는것 -> input 에 ref 넣기
      this.refInputName.current.value = "";
      this.refInputPower.current.value = "";
  }
  render() { // JSX로 화면 만들기
      return (
          <div>
              <div>
                  <label htmlFor="">Name : </label>
                  <input
                      type="text"
                      name="name"
                      placeholder="이름을 입력하세요"
                      defaultValue="이름"
                      ref={this.refInputName} />     {/* javascript 이므로 value 사용X --> defaultValue 사용ㅇ */}
              </div>
              <div>
                  <label htmlFor="">Power : </label>
                  <input
                      type="number"
                      name="power"
                      placeholder="파워를 입력하세요"
                      defaultValue="0"
                      ref={this.refInputPower} />
              </div>
              <button onClick={this.doIns}>Add</button>
          </div>
      )
  }
};

export default CrudInput;