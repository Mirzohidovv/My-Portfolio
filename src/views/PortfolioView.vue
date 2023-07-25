<template >
  <section id="portfolio">
    <div class="portfolio">
      <h2 class="portfolio-title">Portfolio</h2>
    </div>
    <div class="portfolio__content ">

      <h3 class="portfolio__content-title">Gallery</h3>
      <div class="line">
        <div class="line_"></div>
      </div>
      <ul class="portfolio__content-item">
        <li class="portfolio__content-link" :class="{ active: all }" @click="allactive">
          All
        </li>
        <li class="portfolio__content-link" :class="{ active: webap }" @click="webapactive">
          Web-aplications
        </li>
        <li class="portfolio__content-link" :class="{ active: webSite }" @click="webSiteactive">
          Web-Sites
        </li>
      </ul>

      <div class="all__maket">
        <a v-for="link in allLink" :key="link.id" :href="link.href" target="_blank" :class="link.class" ref="linksRef">
          <img class="all_img" :src="link.img" alt="" />
        </a>
        <div id="sign-eye"><i class="fal fa-eye"></i></div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import imgWeather from "../assets/images/weather.jpg";
import imgCinema from "../assets/images/cinema.jpg";
import imgairpods from "../assets/images/airpods.jpg";
import imgZone from '../assets/images/zone.jpg';

const allLink = reactive([
  {
    id: 1,
    href: "https://wexrizadamm.github.io/weather-vuex/",
    class: ["all__link", "web-ap"],
    img: imgWeather,
  },
  {
    id: 2,
    href: "https://mirzohidovv.github.io/Vue-cinema/",
    class: ["all__link", "web-site"],
    img: imgCinema,
  },
  {
    id: 3,
    href: "https://mirzohidovv.github.io/Air-pods/",
    class: ["all__link", "web-site"],
    img: imgairpods,
  },
  {
    id: 4,
    href: "https://mirzohidovv.github.io/zone-simple-site-/",
    class: ["all__link", "web-site"],
    img: imgZone,
  },

]);

const linksRef = ref([]);
const all = ref(false);
const webap = ref(false);
const webSite = ref(false);

const allactive = () => {
  all.value = true;
  webap.value = false;
  webSite.value = false;
  linksRef.value.forEach((item) => {
    item.classList.add("active");
  });
};

const webapactive = () => {
  all.value = false;
  webap.value = true;
  webSite.value = false;
  linksRef.value.forEach((item, i) => {
    item.classList.remove("active");
    item.classList.forEach((ite) => {
      if (ite == "web-ap") {
        item.classList.add("active");
      }
    });
  });
};
const webSiteactive = () => {
  all.value = false;
  webap.value = false;
  webSite.value = true;
  linksRef.value.forEach((item, i) => {
    item.classList.remove("active");
    item.classList.forEach((ite) => {
      if (ite == "web-site") {
        item.classList.add("active");
      }
    });
  });
};

onMounted(() => {
  allactive();
});

</script>

<style lang="scss"  scoped>

  // @include media(575){
  //   align-items: center;
  //   justify-content: center;
  // }





</style>