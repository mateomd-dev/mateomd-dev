<template> 
	<div>
		<h1 class="text-center display-4 mt-2 mb-3">Projects</h1>
		<p class="text-center text-secondary mb-5">Visit my <a href="https://github.com/mateomd-dev">GitHub</a> page to see all my projects!</p>
		<ContentList path="/projects" v-slot="{ list }">     
				<div v-for="project in list.sort((a, b) => a.id - b.id)" :key="project._path" class="mb-3">
					<div class="row justify-content-center">
						<div class="col-2">
							<img :src="project.img">
						</div>
						<div class="col-8">
							<h2 class="fw-bold">
								{{ project.title }}
								<a v-if="project.link" :href="project.link">
									<font-awesome-icon icon="fab fa-github" class="icon ps-1" />
								</a>
							</h2>        
							<p>{{ project.description }}</p>      
						</div>
					</div>
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

img {
	width: 150px;
	height: 150px;
	float: left;
}
</style>
