<script setup>
import { ref, onMounted, onUpdated, onBeforeMount } from 'vue';
import { listSido, listGugun, AddconqueredMountain } from '@/api/mountain';
import { useRouter } from 'vue-router';

const props = defineProps({
    MainCard: Object,
});
console.log('MainCard:', props.MainCard);
const tmpImgSrc = ref('');

const router = useRouter();

const navigateToMountainView = () => {
    router.push({
        name: 'MountainDetail',
        params: { id: props.MainCard.mntilistno },
    });
};

onBeforeMount(() => {
    tmpImgSrc.value = props.MainCard.mntiimg;
    console.log('Image source after mounted:', tmpImgSrc.value);
});
</script>

<template>
    <div class="card shadow-lg m-4" style="width: 450px">
        <img
            class="card-img-top"
            :src="tmpImgSrc"
            alt="src/assets/artmountain.jpg"
            style="height: 300px; width: 450px"
        />

        <div class="card-img-overlay d-flex justify-content-between align-items-center flex-column">
            <p class="card-title text-light fs-2 fw-bold px-2 rounded-pill" style="backdrop-filter: blur(10px)">
                {{ MainCard.mntiname }}
            </p>

            <!-- <RouterLink to="/mountainview"> -->
            <button @click="navigateToMountainView" class="btn btn-light btn-lg rounded-pill px-4 py-2">
                둘러보기<i class="bi bi-arrow-right"></i>
            </button>
            <!-- </RouterLink> -->

            <!-- router.push({ name: 'MountainDetail', params: { id: mntilistno } }); -->
        </div>
    </div>
</template>
<style scoped></style>
