import React from "react";

class CrudListItem extends React.Component {
  static defaultProps = { /*  props의 디폴트 값 설정 */ }
    static propsTypes = {  /* props의 프로퍼티 타입 설정 */ }
    state = {
        // 상태값(변수)을 정의한다.
        isEditMode : false,
    }
    constructor(props) {
        super()
        // this 바인딩. 예시) this.func.handler = this.func.handler.bind(this)
        // func 에 정의한 메서드는 반드시 this bind 처리해야 한다.

        // ref 만들기. 예시) this.inputref = React.createRef()
        this.refInputName  = React.createRef();
        this.refInputPower = React.createRef();
    }
    doUp = (event)=>{
        // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
        const {index, item} = this.props;
        this.props.doUp(index, item);
    }
    doDown = (event)=>{
        const {index, item} = this.props;
        this.props.doDown(index, item);
    }
    doDel = (event)=>{
        const {index, item} = this.props;   // del 에 넘기려는 item, index 도 props에 잇으니까
        this.props.doDel(index, item);
    }
    doEdit = (event)=>{
        // 편집모드로 넘어간다.
        this.setState({
            ...this.state,
            isEditMode : !this.state.isEditMode,
        });
    }
    doSave = (event) => {

        const {index, item} = this.props;

        // 유효성검사
        if(this.refInputName.current.value.trim() === ''){
            alert ('이름을 입력해주세요.')
            this.refInputName.current.focus();
            event.preventDefault();
            event.stopPropagation();
            return false;
        }

        if(this.refInputPower.current.value.trim() === '' && isNaN( !this.refInputPower.current.value.trim())){
            alert ('파워을 확인해주세요. (숫자만)')
            this.refInputPower.current.focus();
            event.preventDefault();
            event.stopPropagation();
            return false;
        }

        const newitem = {
            ...item,
            name : this.refInputName.current.value,
            power : Number(this.refInputPower.current.value)
        }

        this.props.doSave(newitem);

        this.setState({
            ...this.state,
            isEditMode : !this.state.isEditMode,
        });
    }
    render() { // JSX로 화면 만들기
        const {id, name, power} = this.props.item;

        const  BasicMode = (
            <tr className={power >= 300 ? "strong" : "" }>
                <td>{this.props.index + 1}</td>
                <td>{name}</td>
                <td>{power}</td>
                <td>
                    <button onClick={this.doDel}>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doEdit}>Edit</button>
                </td>
            </tr>
        );

        const SaveMode = (
            <tr className={power >= 300 ? "strong" : "" }>
                <td>{this.props.index + 1}</td>
                <td>
                    <input
                        type="text"
                        name="name"
                        placeholder="이름을 입력하세요"
                        defaultValue={name}
                        ref={this.refInputName} />
                </td>
                <td>
                    <input
                        type="number"
                        name="power"
                        placeholder="파워를 입력하세요"
                        defaultValue={power}
                        ref={this.refInputPower} />
                </td>
                <td>
                    <button onClick={this.doDel}>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doSave}>Save</button>
                </td>
            </tr>
        );


        return this.state.isEditMode ? SaveMode : BasicMode;
    }
};

export default CrudListItem;