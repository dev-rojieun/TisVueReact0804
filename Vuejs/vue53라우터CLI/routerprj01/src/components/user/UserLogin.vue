<style scoped>
</style>

<template>
    <div class="col-md-3 mt-4">
        <h1 class="text-center">Login</h1>
        <template v-if="!isLogin">
            <form name="loginF" method="POST" v-on:submit.prevent="login">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        User ID:
                        <input
                            type="text"
                            name="id"
                            v-model="tmpUser.uid"
                            ref="uid"
                            placeholder="User ID"
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        PASSWORD:
                        <input
                            type="password"
                            name="pwd"
                            v-model="tmpUser.pwd"
                            ref="upwd"
                            placeholder="Password"
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="col-md-10 offset-md-1 p-1">
                    <button class="btn btn-block btn-primary mt-3">
                        Login
                    </button>
                </div>
            </form>
            <div>
                <p>
                    로그인 테스트용: ID / PW<br />
                    uid01 / pwd01<br />
                    uid02 / pwd02<br />
                    <br />
                    로그인 테스트 URL:
                    http://localhost:5050/user/login?uid=uid01&pwd=pwd01<br />
                </p>
            </div>
        </template>
        <template v-else>
            <div class="alert alert-primary m-4">
                <h4 class="text-primary">{{ user.uid }}님 로그인 중...</h4>
                <a href="#" v-on:click="logout">로그아웃</a>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    /* pdtmc^2w */
    props: [],
    data: function () {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {
            isLogin: false,
            tmpUser: {
                uid: null,
                pwd: null
            }
        };
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 + 일반 함수 */
        login(event) {
            console.log(event.target);
        }
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