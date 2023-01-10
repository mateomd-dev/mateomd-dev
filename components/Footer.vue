<template>
    <div class="row justify-content-center align-items-center">
        <p class="small text-muted text-end col-6 m-0">© 2022 Mateo</p>
        <div class="col-6 pt-1">
			<ul class="list-group list-group-horizontal">
				<li class="list-group-item border-0 p-0">
					<a href="https://medium.com/@mateomd_dev" class="icon"><font-awesome-icon :icon="['fab', 'medium']" /></a>
				</li>
				<li class="list-group-item border-0 p-0">
					<a href="https://twitter.com/mateomd_dev" class="icon"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
				</li>
				<li class="list-group-item border-0 p-0">
					<a href="https://www.instagram.com/mateomd_dev/" class="icon"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
				</li>
				<li class="list-group-item border-0 p-0">
					<a href="https://github.com/mateomd-dev" class="icon"><font-awesome-icon :icon="['fab', 'github']" /></a>
				</li>
			</ul>
		</div>
    </div>
</template>

<style scoped>
.list-group-item {
	background-color: transparent;
}

.icon {
	color: var(--background-secondary-color);
	font-size: 1rem;
	padding: 0 0.7rem 0 0;
	transition: .2s;
	border: none;
}
.icon:hover {
	color: var(--foreground-secondary-color);
}
</style>
