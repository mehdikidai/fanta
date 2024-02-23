<template>
  <NavBar />
  <div class="home" ref="home_div">
   <div class="bluer">
    <img :src="bluer">
   </div>
    <div ref="home_eff" class="eff"></div>
    <div ref="affect" class="color_effect"></div>
    <div class="container">
      <div class="box_ box_1">
        <div class="photo_f" ref="photoF"></div>
      </div>
      <div class="box_ box_2">
        <Splide :options="options_2" aria-label="My Favorite Images">
          <SplideSlide v-for="(imgx, i) in imgs" :key="i">
            <div class="box_info">
              <div class="t">
                <span>Lorem ipsum dolor sit.</span>
                <h2>Lorem, ipsum.</h2>
              </div>

              <p>
                {{ imgx.text }}
              </p>
              <button class="toLinK">
                go to <i class="material-symbols-outlined"> arrow_right_alt </i>
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
      </div>
      <div class="box_ box_3">
        <Splide
          :options="options"
          aria-label="My Favorite Images"
          @splide:arrows:updated="xx"
        >
          <SplideSlide v-for="(imgx, i) in imgs" :key="i">
            <img
              ref="photo"
              :data-color="imgx.color"
              :data-photo="imgx.photo_2"
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
import fanta from "@/assets/photo/fanta.png";
import x from "@/assets/photo/x.png";
import y from "@/assets/photo/y.png";
import fanta_1 from "@/assets/photo/fanta_1.jpg";
import fanta_2 from "@/assets/photo/fanta_2.jpg";
import fanta_3 from "@/assets/photo/fanta_3.jpg";

import bluer from "@/assets/bluer.svg"

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
      imgs: [
        {
          photo: y,
          color: "#002c9f",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          photo_2: fanta_1,
        },
        {
          photo: fanta,
          color: "#ff6000",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          photo_2: fanta_2,
        },
        {
          photo: x,
          color: "#65157f",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          photo_2: fanta_3,
        },
      ],
      options: {
        type: "loop",
        perPage: 1,
        perMove: 1,
        width: "600px",
        fixedHeight: "70vh",
        focus: "center",
      },
      options_2: {
        direction: "ttb",
        height: "20rem",
        type: "loop",
      },
    };
  },
  mounted() {
    this.$refs.home_div.style.backgroundColor = this.imgs[0].color;
    this.$refs.photoF.style.backgroundImage = `url('${this.imgs[0].photo_2}')`;
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

    xx() {
      const el = document.querySelector(".is-visible img");
      if (el) {
        this.$refs.home_div.style.backgroundColor = el.dataset.color;
        this.$refs.photoF.style.backgroundImage = `url('${el.dataset.photo}')`;
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
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s linear;

  .bluer{
    position: fixed;
    top: 50%;
    right: 0 !important;
    transform: translate(0,-50%);
    width: 100rem;
    aspect-ratio: 1;
    img{
      width: 100%;
    }
  }

  .container {
    width: 100%;
    height: 70vh;
    //background: #fff;
    display: flex;
    gap: 20px;
    position: relative;
    .btns {
      position: fixed;
      width: 150px;
      height: 44px;
      //background: red;
      left: 50%;
      transform: translateX(-50%);
      bottom: 100px;
      display: flex;
      justify-content: space-between;
      button {
        width: 44px;
        aspect-ratio: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.2);
        i {
          font-size: 20px;
          color: #fff;
        }
      }
    }
    .box_ {
      //background: #c7c7c7;
      height: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      &1 {
        position: relative;
        flex: 0.7;
        .photo_f {
          height: 90%;
          aspect-ratio: 1;
          position: absolute;
          left: 0;
          translate: -50% 0;
          rotate: 0deg;
          //background: red;
          border-radius: 50%;
          background-size: cover;
          transform: scale(1);
          opacity: 1;
          transition: all 0.9s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .photo_f_effect {
          rotate: 0deg;
          opacity: 1;
          box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.4);
          animation: photoR 1s cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        @keyframes photoR {
          0% {
            rotate: -100deg;
            //opacity: 0;
            left: -50vw;
          }
          100% {
            rotate: 0deg;
            left: 0;
            //opacity: 1;
          }
        }
      }

      &info {
        //background: red;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 40px;
        height: 100% !important;

        .t {
          h2 {
            font-size: 55px;
            font-weight: 700;
            color: #ffffff;
            text-transform: uppercase;
            
          }
          span {
              color: #fff9 !important;
            }
        }
        p {
          font-size: 18px;
          text-align: left;
          color: #fff;
        }
        .toLinK {
          border: none;
          border-radius: 10px;
          background: #ffffff;
          height: 44px;
          width: 140px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 16px;
          i {
            font-size: 20px;
            transform: translateY(1px);
          }
        }
      }
      .img_drenk {
        height: 94%;
        rotate: 0deg;
      }
      .bg {
        width: 100vw;
        height: 500px;
        position: fixed;
        top: 0;
        z-index: 999;
      }
    }
  }
}
</style>
