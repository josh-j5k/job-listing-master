<script lang="ts" setup>
defineProps({
  listing: {
    required: true,
    type: Object,
  },
});

const emits = defineEmits(["eventListing"]);

function filterListing(e: any) {
  emits("eventListing", e);
}
</script>
<template>
  <div :class="[listing.featured ? 'border-left' : '', 'container']">
    <div class="flex">
      <div class="flex-item">
        <img :src="listing.logo" alt="" />
        <div>
          <div class="flex-center">
            <h2 class="font-md-bold text-clr-primary">{{ listing.company }}</h2>
            <button :class="[listing.new ? 'new' : 'Hidden', 'btn']">
              new!
            </button>
            <button :class="[listing.featured ? 'feature' : 'Hidden', 'btn']">
              featured
            </button>
          </div>
          <h2 class="font-md-bold">{{ listing.position }}</h2>
          <div class="div-flex">
            <p class="time">{{ listing.postedAt }}</p>
            <p class="bullet"></p>
            <p class="contract">{{ listing.contract }}</p>
            <p class="bullet"></p>
            <p class="location">{{ listing.location }}</p>
          </div>
        </div>
      </div>
      <div class="divider">
        <hr />
      </div>
      <div class="flex-tags">
        <div>
          <button @click="filterListing" class="button-filter">
            {{ listing.role }}
          </button>
        </div>
        <div>
          <button @click="filterListing" class="button-filter">
            {{ listing.level }}
          </button>
        </div>
        <div v-for="language in listing.languages">
          <button @click="filterListing" class="button-filter">
            {{ language }}
          </button>
        </div>
        <div v-for="tool in listing.tools">
          <button @click="filterListing" class="button-filter">
            {{ tool }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.text-clr-primary {
  color: var(--clr-primary);
}

.container {
  max-width: 80vw;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem 3rem;
  background-color: var(--clr-white);
  box-shadow: 0px 10px 10px hsla(180, 29%, 50%, 0.281);
  border-radius: 10px;
}

.border-left {
  border-left: 0.4rem solid var(--clr-primary);
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-item {
  display: flex;
  gap: 1rem;
}

.flex-center {
  display: flex;
  gap: 10px;
  align-items: center;
}
.flex-tags {
  display: flex;
  gap: 10px;
  align-items: center;
}
.font-md-bold {
  font-weight: 700;

  margin-right: 1rem;
}
.divider {
  display: none;
}
img {
  width: 80px;
  height: 80px;
  align-self: center;
}
.div-flex {
  color: var(--clr-black-mute);
  display: flex;
  gap: 10px;
}

.bullet {
  width: 5px;
  height: 5px;
  background-color: var(--clr-black-mute);
  border-radius: 50%;
  align-self: center;
}

.btn {
  height: 1.8rem;
  font-size: 0.9em;
  background-color: var(--primary);
  color: var(--clr-light-Grayish-Cyan);
  text-transform: uppercase;
  border: none;
  border-radius: 1rem;
  padding-inline: 10px;
  cursor: pointer;
}

.button-filter {
  font-weight: 700;
  color: var(--clr-primary);
  background-color: var(--clr-light-grayish-cyan);
  border-radius: 5px;
  cursor: pointer;
  padding: 7px;
  border: none;
}

.button-filter:hover {
  background-color: var(--clr-primary);
  color: var(--clr-white);
}
.new {
  background-color: var(--clr-primary);
}

.feature {
  background-color: var(--clr-very-Dark-Grayish-Cyan);
}

.Hidden {
  display: none;
}
.Show {
  display: block;
}

@media (max-width: 760px) {
  .container {
    max-width: 90vw;
  }
  .flex {
    flex-direction: column;
  }
  .flex-item {
    flex-direction: column;
    margin-top: -3.5rem;
  }
  .flex-item img {
    align-self: flex-start;
  }
  .flex-tags {
    flex-wrap: wrap;
    gap: 20px;
  }
  .divider {
    display: block;
  }
  .divider hr {
    width: min(60vw, 25rem);

    color: var(--clr-black-mute);
    opacity: 0.8;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .font-md-bold {
    font-size: 20px;
  }
  .btn {
    font-size: 0.8em;
  }
}
</style>
