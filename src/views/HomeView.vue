<template>
  <div class="divMobile">
    <img :src="emoji" />
    <h1>The phone is not supported</h1>
  </div>
  <NavBar />
  <div class="home" ref="home_div">
    <div class="bluer">
      <img :src="bluer" />
    </div>
    <div class="bluer bluer_2">
      <img :src="bluer" />
    </div>
    <div class="bluer bluer_3">
      <img :src="bluer" />
    </div>
    <div ref="home_eff" class="eff"></div>
    <div ref="affect" class="color_effect"></div>
    <div class="container">
      <div class="box_ box_1">
        <div class="photo_f" ref="photoF"></div>
      </div>
      <div class="box_ box_2">
        <Splide
          :options="options_2"
          aria-label="My Favorite Images"
          ref="splide_txt"
        >
          <SplideSlide v-for="(imgx, i) in imgs" :key="i">
            <div class="box_info">
              <div class="t">
                <span>Lorem ipsum dolor sit.</span>
                <h2>Lorem, ipsum.</h2>
              </div>

              <p ref="txt">
                {{ imgx.text }}
              </p>
              <button class="toLinK">
                Show More
                <i class="material-symbols-outlined"> arrow_right_alt </i>
              </button>
            </div>
          </SplideSlide>
          <div class="splide__arrows">
            <button ref="Prev_text" class="splide__arrow splide__arrow--prev">
              Prev
            </button>
            <button ref="Next_text" class="splide__arrow splide__arrow--next">
              Next
            </button>
          </div>
        </Splide>

        <div class="pages">
          <button v-for="(el, i) in imgs" class="p" :key="i" @click="goTo(i)">
            <img :class="elementActive === i ? 'active' : ''" :src="el.photo" />
          </button>
        </div>
      </div>
      <div class="box_ box_3">
        <Splide
          :options="options"
          aria-label="My Favorite Images"
          @splide:arrows:updated="changePhoto"
          ref="splide_img"
        >
          <SplideSlide v-for="(imgx, i) in imgs" :key="i">
            <img
              ref="photo"
              :data-color="imgx.color"
              :data-photo="imgx.photo_2"
              :data-id="i"
              class="img_drenk"
              :src="imgx.photo"
              :alt="i"
            />
          </SplideSlide>
          <div class="splide__arrows">
            <button ref="Prev" class="splide__arrow splide__arrow--prev">
              Prev
            </button>
            <button ref="Next" class="splide__arrow splide__arrow--next">
              Next
            </button>
          </div>
        </Splide>
      </div>
      <div class="btns">
        <button @click="prevBtn">
          <i class="material-symbols-outlined"> chevron_left </i>
        </button>
        <button @click="nextBtn">
          <i class="material-symbols-outlined"> chevron_right </i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

import {
  x,
  y,
  fanta_1,
  fanta_2,
  fanta_3,
  bluer,
  fanta,
  z,
  fanta_4,
  emoji,
} from "@/assets";

import { Splide, SplideSlide } from "@splidejs/vue-splide";


import "@splidejs/vue-splide/css";

export default {
  name: "HomeView",
  components: {
    Splide,
    SplideSlide,
    NavBar,
  },
  data() {
    return {
      bluer,
      emoji,
      imgs: [
        {
          photo: fanta,
          color: "#ff6000",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          photo_2: fanta_2,
        },
        {
          photo: y,
          color: "rgb(1, 160, 79)",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          photo_2: fanta_1,
        },
        {
          photo: x,
          color: "#65157f",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          photo_2: fanta_3,
        },
        {
          photo: z,
          color: "rgb(173, 26, 38)",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          photo_2: fanta_4,
        },
      ],
      options: {
        type: "loop",
        perPage: 1,
        perMove: 1,
        width: "600px",
        fixedHeight: "70vh",
        focus: "center",
        drag: false,
      },
      options_2: {
        direction: "ttb",
        height: "24rem",
        type: "loop",
        drag: false,
      },
      elementActive: 0,
    };
  },
  mounted() {
    this.$refs.home_div.style.backgroundColor = this.imgs[0].color;
    this.$refs.photoF.style.backgroundImage = `url('${this.imgs[0].photo_2}')`;
    this.elementActive = 0;
  },
  methods: {
    prevBtn() {
      this.$refs.Prev.click();
      this.$refs.Prev_text.click();
      this.showEffect();
    },
    nextBtn() {
      this.$refs.Next.click();
      this.$refs.Next_text.click();
      this.showEffect();
    },

    changePhoto() {
      //changePhoto
      const el = document.querySelector(".is-visible img");
      if (el) {
        this.$refs.home_div.style.backgroundColor = el.dataset.color;
        this.$refs.photoF.style.backgroundImage = `url('${el.dataset.photo}')`;
        console.log(el.dataset.id);
        this.elementActive = Number(el.dataset.id);
      }
    },

    showEffect() {
      this.$refs.home_div.classList.remove("home_effect");
      this.$refs.photoF.classList.remove("photo_f_effect");
      setTimeout(() => {
        this.$refs.home_div.classList.add("home_effect");
        this.$refs.photoF.classList.add("photo_f_effect");
      }, 20);
    },

    goTo(n) {
      this.$refs.splide_img.splide.go(n);
      this.$refs.splide_txt.splide.go(n);
      this.elementActive = n;
      this.showEffect();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "./HomeView";
</style>
