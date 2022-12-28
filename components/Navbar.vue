<template>
    <nav class="navbar navbar-expand-sm justify-content-center">
        <div class="container justify-content-end align-items-sm-center">
            <button 
                class="navbar-toggler shadow-none border-0 mt-2" 
                type="button"
                data-bs-toggle="collapse" 
                data-bs-target="#navbarToggle" 
                aria-controls="navbarToggle"
                aria-expanded="false"
                aria-label="Toggle">
                <font-awesome-icon :icon="['fas', 'bars']" class="fs-2"/>
            </button>
            <div class="collapse navbar-collapse justify-content-center text-end" id="navbarToggle">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NuxtLink to="/" class="nav-link" active-class="active">
                            Home
                        </NuxtLink>
                    </li> 
                    <li class="nav-item" >
                        <NuxtLink to="/articles" class="nav-link" active-class="active">
                            Articles
                        </NuxtLink>
                    </li> 
                    <li class="nav-item">
                        <NuxtLink to="/projects" class="nav-link" active-class="active">
                            Projects
                        </NuxtLink>
                    </li> 
                    <li class="nav-item">
                        <NuxtLink to="/about" class="nav-link" active-class="active">
                            About
                        </NuxtLink>
                    </li> 
                    <li class="nav-item">
                        <NuxtLink to="/contact" class="nav-link" active-class="active">
                            Contact
                        </NuxtLink>
                    </li> 
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
@import 'bootstrap';

@media  (min-width: 576px) {
    nav {
        border-top: 1px solid var(--background-secondary-color);
        border-bottom: 1px solid var(--background-secondary-color);
    }
}

li {
    margin-right: 1rem;
}

.nav-item .nav-link {
	color: var(--foreground-color-secondary);
}

.nav-item .nav-link:hover {
	color: var(--primary-color);
}

.nav-item .nav-link.active {
	color: var(--primary-color);
    text-decoration: underline 2px;
}

.navbar-toggler {
	color: var(--foreground-color-secondary);
}
</style>