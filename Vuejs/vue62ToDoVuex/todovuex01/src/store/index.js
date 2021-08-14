import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"; // 추가

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {
        getTodo(mutations) {
            /**
             * Read.
             * axios 로  http://localhost:5050/todo/get 호출
             *
             * 비동기 호출 코드는 직접 작성.
             *
             * 서버로 보내는 데이터. 예시) {  }
             * params: null
             *
             * axios 호출 성공 하면 mutations.commit("todo", res.data); 호출
             */
            // import axios from "axios";

            axios({
                url: "http://localhost:5050/todo/get", // 호출되는 서버 주소.
                method: "get", // request method: get, post, delete, put
                params: {}, // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
                timeout: 30000, // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
                responseType: "json" // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
            })
                .then((res) => {
                    console.log(res.data);
                    //this.message1 = res.data;
                    mutations.commit("getTodo", res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addTodo(mutations /* 고정 */, newTodoItem) {
            //mutations.commit("addTodo", newTodoItem);
            axios({
                url: "http://localhost:5050/todo/add", // 호출되는 서버 주소.
                method: "get", // request method: get, post, delete, put
                params: JSON.stringify({ todo: newTodoItem, done: false }), // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
                timeout: 30000, // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
                responseType: "json" // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
            })
                .then((res) => {
                    console.log(res.data);
                    //this.message1 = res.data;
                    mutations.commit("addTodo", res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        doneToggle(mutations /* 고정 */, id) {
            //mutations.commit("doneToggle", id);
            axios({
                url: "http://localhost:5050/todo/donetoggle", // 호출되는 서버 주소.
                method: "get", // request method: get, post, delete, put
                params: { id }, // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
                timeout: 30000, // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
                responseType: "json" // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
            })
                .then((res) => {
                    console.log(res.data);
                    //this.message1 = res.data;
                    mutations.commit("doneToggle", res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        removeTodo(mutations /* 고정 */, id) {
            //mutations.commit("removeTodo", id);
            axios({
                url: "http://localhost:5050/todo/remove", // 호출되는 서버 주소.
                method: "get", // request method: get, post, delete, put
                params: { id }, // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
                timeout: 30000, // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
                responseType: "json" // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
            })
                .then((res) => {
                    console.log(res.data);
                    //this.message1 = res.data;
                    mutations.commit("removeTodo", res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        clearAll(mutations /* 고정 */) {
            //mutations.commit("clearAll");
            axios({
                url: "http://localhost:5050/todo/clearall", // 호출되는 서버 주소.
                method: "get", // request method: get, post, delete, put
                params: {}, // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
                timeout: 30000, // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
                responseType: "json" // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
            })
                .then((res) => {
                    console.log(res.data);
                    //this.message1 = res.data;
                    mutations.commit("clearAll", res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    mutations: {
        /* 왜 mutations 를 사용하나? state 를 바꾸기 위해서
         * mutations 에는 메서드만 등록 가능하다.
         * 첫번째인자: 무조건 state 로 고정.
         * 두번째인자: 값. mutations.commit() 호출시 넘겨지는 값.
         * */
        getTodo(
            state /* 고정 */,
            param /* mutations.commit 호출시 넘겨지는 값 */
        ) {
            state.todoItems = param;
        },
        addTodo(
            state /* 고정 */,
            param /* mutations.commit 호출시 넘겨지는 값 */
        ) {
            state.todoItems = param;
        },
        doneToggle(
            state /* 고정 */,
            param /* mutations.commit 호출시 넘겨지는 값 */
        ) {
            state.todoItems = param;
        },
        removeTodo(
            state /* 고정 */,
            param /* mutations.commit 호출시 넘겨지는 값 */
        ) {
            state.todoItems = param;
        },
        clearAll(
            state /* 고정 */,
            param /* mutations.commit 호출시 넘겨지는 값 */
        ) {
            state.todoItems = param;
        }
    },
    state: {
        /* vue인스턴스나 컴포넌트의 data 프로퍼티에 해당 */
        todoItems: []
    },
    getters: {
        /* state 변경 정보를 컴포넌트에 전달하는 역활.
         * 메서드로 만들어야 하며 메서드명은 state 의 이름을 그대로 사용
         * 첫번째인자: 무조건 state
         * 컴포넌트에서는 computed를 사용하여 store의 state 변경 정보를 자동으로 가져오게 된다.
         * 예시) message()=> store.getters.인자;
         */
        todoItems: function (state /* 고정 */) {
            return state.todoItems;
        }
    }
});
