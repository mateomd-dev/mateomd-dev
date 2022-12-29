<template> 
	<div>
		<h1 class="text-center display-4 mt-2 mb-5">Projects</h1>
		<ContentList path="/projects" v-slot="{ list }">     
				<div v-for="project in list.sort((a, b) => a.id - b.id)" :key="project._path">        
					<h2>{{ project.title }}</h2>        
					<p>{{ project.description }}</p>      
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
