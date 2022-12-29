<template> 
	<div>
		<h1 class="text-center display-4 mt-2 mb-5">Articles</h1>
		<ContentList path="/articles" v-slot="{ list }">     
				<div v-for="article in list" :key="article._path">        
					<NuxtLink :to="article._path">
						<h2 class="">{{ article.title }}</h2>        
						<p>{{ article.created_at }}</p>
						<p>{{ article.description }}</p>      
					</NuxtLink>
				</div>    
		</ContentList>  
	</div>
</template>

<style scoped>
a {
	color: var(--foreground-primary-color);
	text-decoration: none;
}
a:hover {
	color: var(--primary-color);
}
</style>
