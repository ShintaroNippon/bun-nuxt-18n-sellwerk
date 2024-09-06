<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="de">de</option>
      </select>
      <p>{{ $t("welcome") }}</p>
    </form>
    <h1 class="text-3xl">{{ $t("hello-world") }}</h1>
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>
