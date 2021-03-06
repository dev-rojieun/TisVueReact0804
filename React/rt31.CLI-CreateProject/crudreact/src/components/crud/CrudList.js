import React  from "react";

import CrudListItem from './CrudListItem';

class CrudList extends React.Component {
  static defaultProps = { /*  props의 디폴트 값 설정 */ }
  static propsTypes = {  /* props의 프로퍼티 타입 설정 */ }
  state = {
      // 상태값(변수)을 정의한다.

  }
  style = {
      // 컴포넌트 내부에서 사용할 인라인 스타일을 정의한다.
      // getter 를 사용하면 객체 내부 참조가 가능하다.

  }
  func = {
      // func에 정의된 메서드는 반드시 constructor에서 this를 bind() 처리해야 한다.
      // func에는 자식 컴포넌트에 넘길 메서드만 작성한다.
      // 왜 자식에게 부모 메서드를 넘기나? 부모의 상태값을 변경하기 위해서.

  }
  constructor(props) {
      super()
      // this 바인딩. 예시) this.func.handler = this.func.handler.bind(this)
      // func 에 정의한 메서드는 반드시 this bind 처리해야 한다.

      // ref 만들기. 예시) this.inputref = React.createRef()

  }
  componentDidMount() {
      // 마운트 완료 후에 실행됨 : 페이지 load 될 때 한번
      // componentDidMount가 사용되는 경우: redux 구독 설정, focus 줄때
  }
  componentDidUpdate(prevProps, prevState) {
      // 업데이트 완료 후에 실행됨 : 여러번, state 가 변경될 때마다
  }
  componentWillUnmount() {
      // 언마운트 완료 후에 실행됨 : 페이지 unload 될 때 한번
      // componentWillUnmount가 사용되는 경우: redux 구독 해제, 이벤트 핸들러 해제
  }
  handler = (event)=>{
      // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
      console.log(event.target)
  }
  render() { // JSX로 화면 만들기
      const {items} = this.props;

      // array.map( (element , index, array) => { ... } )
      const item = items.map( (item, index, items) => {
          return (
              <CrudListItem key={item.id} {...this.props} index={index} item={item}></CrudListItem>
          );
      });

      return (
          <div>
              <table>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>NAME</th>
                          <th>POWER</th>
                          <th>CRUD</th>
                      </tr>
                  </thead>
                  <tbody>
                      {item}
                  </tbody>
              </table>
          </div>
      )
  }
};

export default CrudList;