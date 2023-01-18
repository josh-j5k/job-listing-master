<script lang="ts" setup>
defineProps({
  values: String,
  arrayVal: String,
});

const emits = defineEmits(["clearFilter", "close-filter-btn"]);

const ClearFilter = () => {
  emits("clearFilter");
};

const CloseFilterBtn = (e: any) => {
  emits("close-filter-btn", e);
};
</script>

<template>
  <div class="container position-top">
    <div class="flex clearFilterContainer">
      <div>
        <button
          @click="CloseFilterBtn"
          v-for="value in values"
          class="button-filtered">
          <span class="bold"> {{ value }} </span>
          <span class="close-filter"><i class="fa-solid fa-x"></i></span>
        </button>
      </div>
      <div>
        <p @click="ClearFilter" class="text-decorated">Clear</p>
      </div>
    </div>
  </div>
</template>

<style>
.position-top {
  margin-top: -4rem;
  padding-left: 1rem;
}
.button-filtered {
  color: var(--clr-primary);
  background-color: var(--clr-light-grayish-cyan);
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  padding: 8px;
  padding-right: 0;
  border: none;
}
.close-filter {
  font-weight: 700;
  background-color: var(--clr-primary);
  color: white;
  padding: 8px;
  font-weight: 700;
  border-radius: 0 5px 5px 0;
}

.button-filtered:hover .close-filter {
  background-color: var(--clr-very-Dark-Grayish-Cyan);
}

.text-decorated {
  font-weight: 700;
  color: var(--clr-primary);
  text-decoration: underline;
  cursor: pointer;
  margin-left: 5px;
}

.bold {
  font-weight: 700;
  padding-right: 10px;
  padding-left: 5px;
}

@media (max-width: 760px) {
  .position-top {
    position: relative;
    padding-right: 2rem;
  }

  .flex.clearFilterContainer {
    flex-direction: row;
    justify-content: space-between;
  }

  .button-filtered {
    margin-bottom: 1rem;
  }
}
</style>
