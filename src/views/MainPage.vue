<template>
  <main>
    <div class="logo-banner">
      <img
        class="main-logo"
        alt="Da Soda Jerks logo"
        src="../assets/dasodajerks_logo_main.png"
      />
    </div>

    <h2>{{ msg }}</h2>
    <p v-for="(paragraph, index) in mission.text" :key="index">
      {{ paragraph }}
    </p>
    <RoundButton text="Support Da Soda Jerks" color="var(--pink)">
    </RoundButton>

    <h2>Da Soda</h2>
    <img
      src="../assets/root-beer-clip.gif"
      alt="local-soda-company-img"
      class="local-soda-img"
    />

    <p v-for="(paragraph, index) in product.text" :key="index">
      {{ paragraph }}
    </p>
    <RoundButton
      text="Find Your Favorite Flavor"
      color="var(--blue)"
    ></RoundButton>

    <h2>Sustainability</h2>
    <img
      class="plastic-bottle-graphic"
      alt="plastic-bottle-waste-graphic"
      src="../assets/plastic-bottle.png"
    />
    <p v-html="sustainability.html"></p>
    <p v-for="(paragraph, index) in sustainability.text" :key="index">
      {{ paragraph }}
    </p>
    <RoundButton text="The Plastic Problem" color="var(--purple)"></RoundButton>

    <h2>Community is Cooperation</h2>
    <p v-for="(paragraph, index) in cooperation.text" :key="index">
      {{ paragraph }}
    </p>
    <RoundButton
      text="Our Cooperative Model"
      color="var(--violet)"
    ></RoundButton>
  </main>
</template>

<script>
import RoundButton from "../components/RoundButton";

export default {
  name: "MainPage",
  props: {
    msg: String,
  },
  components: {
    RoundButton,
  },
  data() {
    return {
      mission: {
        text: [
          "We believe communities are best served by businesses that follow a triple bottom line of people, planet, and prosperity.",
          "This means we're serious about sustainably providing locally-sourced soda pop, eliminating plastic waste, " +
            "educating our neighbors, and building equity within our neighborhoods.",
          "We're so serious about this, in fact, some people may call as jerks — Soda Jerks.",
        ],
      },
      product: {
        text: [
          "We have partnered with a family-owned, business that has been a Chicago favorite for nearly 100 years.",
          "Because just like da Chicago hotdog that is dragged through da garden, we believe da best soda pop " +
            "flavors you can get are already in your backyard.",
        ],
      },
      sustainability: {
        html: `Globally, there are <strong class="bold blue">500 billion plastic bottles</strong> produced each year. Out of all the plastic produced, only <strong class="bold red">9% is recycled</strong>. The rest lingers in our communities and environment while affecting our health and contributing to climate change.`,
        text: [
          "This is obscene, and outrageous.",
          "Our goal is to sway Big Soda towards sustainable practices as well as educate our culture as to what is not only possible, but necessary.",
        ],
      },
      cooperation: {
        text: [
          "The economic landscape has changed drastically and continues to change. For Americans, " +
            "skyrocketing prices for education and housing is quickly erasing the few remaining opportunities to build equity.",
          "Our business is worker owned and democratically run because we believe that the relationship between a " +
            "community and a business starts with its workers.",
          "Communities should never be harmed by the businesses they sustain and workers should a voice in how " +
            "their work affects their communities.",
        ],
      },
    };
  },
};
</script>

<style scoped>
main {
  padding: 0 1rem;
}
.bold {
  font-weight: bold;
}
.red {
  color: darkred;
}
.blue {
  color: darkblue;
}
.plastic-bottle-graphic {
  padding: 0;
  max-width: 90%;
}
.local-soda-img {
  padding: 0;
  max-height: 100px;
}
.logo-banner {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
