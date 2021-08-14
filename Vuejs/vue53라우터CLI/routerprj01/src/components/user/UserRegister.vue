<style scoped>
</style>

<template>
    <div>
        <div id="join" class="container p-3">
            <h1 class="text-center text-primary">SingUp</h1>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    Name:
                    <input
                        type="text"
                        name="name"
                        v-model="user.name"
                        placeholder="Name"
                        class="form-control"
                    />
                </div>
            </div>

            <div class="row">
                <div class="col-md-8 offset-md-2">
                    User ID:
                    <input
                        type="text"
                        name="id"
                        v-model="user.id"
                        v-on:keyup="checkId"
                        class="form-control"
                        placeholder="User ID"
                    />
                    <div class="text-danger" v-show="errId">
                        아이디는 4자이상 6자 이하 입니다.
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    PASSWORD:
                    <input
                        type="text"
                        name="pwd"
                        v-model="user.pwd"
                        v-on:keyup="checkPwd"
                        placeholder="Password"
                        class="form-control"
                    />
                    <div class="text-danger" v-show="errPwd">
                        비밀번호는 4자 이상 8자 이내입니다.
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    PASSWORD Confirm :
                    <input
                        type="text"
                        name="pwd2"
                        v-on:keyup="checkRePwd"
                        placeholder="Password Confirm"
                        class="form-control"
                    />
                    <div class="text-danger" v-show="errPwd2">
                        비밀번호가 일치하지 않아요
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    Email :
                    <input
                        type="text"
                        name="email"
                        v-model="user.email"
                        v-on:change="checkEmail"
                        placeholder="Email"
                        class="form-control"
                    />
                    <div class="text-danger" v-show="errEmail">
                        이메일 형식에 맞지 않아요
                    </div>
                </div>
            </div>

            <div class="row m-2">
                <div class="col-md-8 offset-md-2 p-1">
                    <button
                        class="btn btn-block btn-outline-success"
                        v-on:click="join"
                    >
                        Signup
                    </button>
                </div>
            </div>

            <div v-show="isProcess" class="alert alert-danger m-5">
                <h3>회원 가입 요청 중...</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    /* pdtmc^2w */
    props: [],
    data: function () {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {
            user: { uid: null, pwd: null, email: null },
            errId: null,
            errPwd: null,
            errPwd2: null,
            errEmail: null,
            isProcess: false
        };
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 + 일반 함수 */
        checkId() {},
        checkPwd() {},
        checkRePwd() {},
        checkEmail() {},
        join() {}
    },
    components: {
        /* 전역 컴포넌트는 등록하지 않는다. */
        /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
    },
    mounted: function () {
        console.log("mounted");
    },
    updated: function () {
        console.log("updated");
    }
};
</script>