<template>
  <div class="row">
    <div class="col-12 col-lg-8">
      <h1 class="mb-3">Latest Article</h1>
      <div v-for="{_path, title, created_at, description} in data" :key="_path">        
        <NuxtLink :to="_path">
          <h2 class="fw-bold">{{ title }}</h2>        
          <p class="text-muted">{{ dateTime(created_at) }}</p>
          <p>{{ description }}</p>      
        </NuxtLink>
      </div>
      <h1 class="fs-4 mt-5">More Articles</h1>
      <p>More articles will be published soon!</p> 
    </div>
    <div class="col-12 col-lg-4 mt-5 mt-lg-4 ps-lg-5 pe-0">
        <InfoCard class="ms-lg-5 me-0" />
    </div>
  </div>
</template>

<script setup>
import moment from 'moment';

const { data, refresh } = useAsyncData('index', () => {
  return queryContent('/articles').limit(1).find();
})

function dateTime(value) {
  return moment(value).format('MMMM D, YYYY');
}
</script>

<style scoped>
a {
	color: var(--foreground-primary-color);
	text-decoration: none;
}
a:hover {
	color: var(--primary-color);
}
</style>
