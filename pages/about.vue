
<template>
	<div>
		<h1><strong>Hey,</strong></h1>
		<p>
			I'm Mateo - a Computer Science student at Swansea University and I'm interested
			basically in anything related to technology. My passion is helping
			to solve difficult problems and contributing to projects that change the world. 
			Currently, I'm mainly focusing on <strong class="highlighted text-nowrap">Artificial Intelligence</strong> 
			and <strong class="highlighted text-nowrap">Autonomous Driving</strong>.
		</p>
		<h2 class="mt-4">Skills</h2>
		<p>
			Most of my recent work has been in <strong class="highlighted text-nowrap">Deep Learning</strong> and 
			<strong class="highlighted text-no-wrap">Computer Vision</strong>. 
			I also do some web development and spend too much time on my Linux setup and tinkering with old hardware.
			<br>
			Here are a few technologies I've worked with recently:
		</p>
		<div class="row skills-list">
			<div class="col-4">
				<ul class="list-group">
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />Python</li>
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />C++</li>
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />Java</li>
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />TypeScript</li>
				</ul>
			</div>
			<div class="col-4"> 
				<ul class="list-group">
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />PyTorch</li>
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />Open3D</li>
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />Django</li>
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />Vue/Nuxt</li>
				</ul>
			</div>
			<div class="col-4"> 
				<ul class="list-group">
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />Linux</li>
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />Bash</li>
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />i3wm</li>
					<li><font-awesome-icon :icon="['fas', 'caret-right']" class="pe-2" />Vim</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
.skills-list ul {
	list-style: none;
}

.skills-list li {
	color: var(--foreground-color-primary)
}

h1 > strong {
	color: var(--primary-color);
}
</style>