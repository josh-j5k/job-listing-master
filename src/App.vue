<template>
  <header>
    <Header />
    <Filtered
      :values="ClickedFilterBtnVal"
      v-if="Filter"
      @clearFilter="ClearFilter"
      @close-filter-btn="CloseFilterBtn($event)" />
  </header>
  <main>
    <div class="main-container">
      <Listings
        @filter-listing="BtnFilter($event)"
        :listings="filteredListings" />
    </div>
  </main>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import Listings from "./components/Listings.vue";
import Filtered from "./components/Listing/Filtered.vue";
import type listingInterface from "./types/listings";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Filtered,
    Listings,
  },

  props: {
    listings: {
      type: Object as PropType<listingInterface[]>,
    },
  },

  data() {
    return {
      listings: Object as PropType<listingInterface[]>,
      ClickedFilterBtnVal: Object(),
      Filter: false,
      unFilterByTag: "",
    };
  },

  methods: {
    BtnFilter: function (e: any) {
      let data = e.target.firstChild.data;

      this.ClickedFilterBtnVal[data] = data;
    },

    ClearFilter() {
      this.Filter = false;
      this.ClickedFilterBtnVal = Object();
    },

    CloseFilterBtn(e: any) {
      this.unFilterByTag = e.currentTarget.innerText;
      delete this.ClickedFilterBtnVal[this.unFilterByTag];

      if (Object.keys(this.ClickedFilterBtnVal).length == 0) {
        this.Filter = false;
      }
    },

    async loadData() {
      // let res = await fetch("http://localhost:3000/listings");
      let res = await fetch("../data.json");
      const data = await res.json();
      return data;
    },
  },

  async created() {
    this.listings = await this.loadData();
  },

  updated() {},

  computed: {
    filteredListings: function () {
      let listings = this.listings;
      let arrLenght = Object.keys(this.ClickedFilterBtnVal);

      // If statement

      if (arrLenght.length > 0 && arrLenght.length < 2) {
        return listings.filter((listing: any) => {
          let arr = Object.values(listing).flat();
          if (arr.includes(arrLenght[0])) {
            this.Filter = true;
            return arr;
          }
        });
      } else if (arrLenght.length > 1 && arrLenght.length < 3) {
        return listings.filter((listing: any) => {
          let arr = Object.values(listing).flat();
          if (arr.includes(arrLenght[0]) && arr.includes(arrLenght[1])) {
            this.Filter = true;
            return arr;
          }
        });
      } else if (arrLenght.length > 2 && arrLenght.length < 4) {
        return listings.filter((listing: any) => {
          let arr = Object.values(listing).flat();
          if (
            arr.includes(arrLenght[0]) &&
            arr.includes(arrLenght[1]) &&
            arr.includes(arrLenght[2])
          ) {
            this.Filter = true;
            return arr;
          }
        });
      } else if (arrLenght.length > 3 && arrLenght.length < 5) {
        return listings.filter((listing: any) => {
          let arr = Object.values(listing).flat();
          if (
            arr.includes(arrLenght[0]) &&
            arr.includes(arrLenght[1]) &&
            arr.includes(arrLenght[2]) &&
            arr.includes(arrLenght[3])
          ) {
            this.Filter = true;
            return arr;
          }
        });
      } else if (arrLenght.length > 4 && arrLenght.length < 6) {
        return listings.filter((listing: any) => {
          let arr = Object.values(listing).flat();
          if (
            arr.includes(arrLenght[0]) &&
            arr.includes(arrLenght[1]) &&
            arr.includes(arrLenght[2]) &&
            arr.includes(arrLenght[3]) &&
            arr.includes(arrLenght[4])
          ) {
            this.Filter = true;
            return arr;
          }
        });
      }

      return listings;
    },
  },

  // fetch("../public/data.json")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log("error"));
});
</script>

<style>
.main-container {
  padding-bottom: 2rem;
}
</style>
