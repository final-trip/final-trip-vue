<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useMemberStore } from '@/stores/member';

const { isLogin, userInfo } = storeToRefs(useMemberStore());
const router = useRouter();

const memberStore = useMemberStore();
const { userLogout } = memberStore;

const headerhtml = ref('');

watch(
    () => userInfo.value,
    (newValue, oldValue) => {
        if (newValue !== oldValue) {
            // 새로운 값이 이전 값과 다를 때 실행할 로직 작성
            console.log('세션 스토리지 값이 변경되었습니다:', newValue);
            // 추가 작업 수행
        }
    }
);

const logout = async () => {
    await userLogout(userInfo.value.userId);
    sessionStorage.clear(); // 세션 스토리지의 데이터 모두 제거
    router.push('/login');
};

const goToMyPage = () => {
    if (!isLogin) {
        // 비로그인 상태일 때 로그인 창 보여주기
        alert('로그인이 필요합니다.');
        router.push('/login');
    } else {
        // 로그인 상태일 때 마이페이지로 이동
        router.push('/mypage');
    }
};

const goToMyInfo = () => {
    if (!isLogin) {
        // 비로그인 상태일 때 로그인 창 보여주기
        alert('로그인이 필요합니다.');
        router.push('/login');
    } else {
        // 로그인 상태일 때 마이페이지로 이동
        router.push('/myinfo');
    }
};
const goToPlan = () => {
    if (!isLogin) {
        // 비로그인 상태일 때 로그인 창 보여주기
        alert('로그인이 필요합니다.');
        router.push('/login');
    } else {
        // 로그인 상태일 때 마이페이지로 이동
        router.push('/plan');
    }
};

const goToBoard = () => {
    if (!isLogin) {
        // 비로그인 상태일 때 로그인 창 보여주기
        alert('로그인이 필요합니다.');
        router.push('/login');
    } else {
        // 로그인 상태일 때 마이페이지로 이동
        router.push('/board');
    }
};
</script>

<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-light mt-1 mb-1 py-0">
        <div class="container-lg my-0 py-0">
            <div class="d-flex flex-row">
                <router-link to="/" class="d-flex flex-row align-items-center nav-link">
                    <a class="navbar-brand nav-link" href="javascript:void(0)">
                        <img src="@/assets/mtnlogo.png" class="rounded mx-auto d-block" alt="..." />
                    </a>
                    <p class="text-muted fs-2 mt-4 fw-bold">산들바람</p>
                </router-link>
            </div>

            <div class="col-7 d-flex flex-row align-items-center justify-content-end">
                <div class="mt-3 ms-1 d-flex flex-row align-items-center" tyle="height: 100%;">
                    <!-- <li class="nav-item">
            <router-link to="/conqueredmountain" class="nav-link">
              <h5 class="text-primary">정복한 산</h5>
            </router-link>
          </li> -->

                    <p class="text-primary fs-4 fw-bold me-3">
                        <router-link to="/search" class="nav-link text-primary">검색</router-link>
                    </p>

                    <!-- <router-link to="/board" class="nav-link"> -->
                    <p id="board" @click="goToBoard" class="text-primary fs-4 fw-bold me-3">게시판</p>
                    <!-- </router-link> -->

                    <!-- <router-link to="/plan" class="nav-link"> -->
                    <p @click="goToPlan" class="text-primary fs-4 fw-bold me-3">계획</p>
                    <!-- </router-link> -->

                    <p @click="goToMyPage" class="text-primary fs-4 fw-bold me-3">마이페이지</p>

                    <p @click="goToMyInfo" class="text-primary fs-4 fw-bold me-3">공지사항</p>
                    <div v-html="headerhtml"></div>

                    <div v-if="!isLogin" class="d-flex flex-row align-items-center" style="margin-top: 8px">
                        <router-link to="/login" class="px-1">
                            <button type="button" class="btn btn-primary rounded-pill text-white fw-bold fs-5 mb-3">
                                로그인
                            </button>
                        </router-link>

                        <router-link to="/register" class="px-1">
                            <button type="button" class="btn btn-primary rounded-pill text-white fw-bold fs-5 mb-3">
                                회원가입
                            </button>
                        </router-link>
                    </div>

                    <div v-else>
                        <button
                            type="button"
                            class="btn btn-primary rounded-pill text-white fw-bold fs-5 mb-3"
                            @click="logout"
                        >
                            로그아웃
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
img {
    height: 111px;
    text-align: left;
}
</style>
