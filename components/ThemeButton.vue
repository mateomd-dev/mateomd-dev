<template>
    <div>
        <button @click="toggleTheme" class="theme-toggle">
            <svg 
                v-if="theme =='dark'" 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            >
			    <circle cx="12" cy="12" r="5"></circle>
			    <line x1="12" y1="1" x2="12" y2="3"></line>
			    <line x1="12" y1="21" x2="12" y2="23"></line>
			    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
			    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
			    <line x1="1" y1="12" x2="3" y2="12"></line>
			    <line x1="21" y1="12" x2="23" y2="12"></line>
			    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
			    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
		    </svg>
            <svg 
                v-if="theme == 'light'" 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="black" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            >
			    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
		    </svg>
        </button>
    </div>
</template>


<script>
export default {
	emits: ['toggleTheme'],
	data() {
		return {
			theme: "light"
		}
	},
	methods: {
		toggleTheme() {
			const activeTheme = localStorage.getItem("theme")
			if (activeTheme === "light") {
				this.setTheme("dark")
			} else {
				this.setTheme("light")
			}
			this.$emit('toggleTheme', this.theme)
		},
		getTheme() {
			return localStorage.getItem("theme")
		},
		setTheme(theme) {
			localStorage.setItem("theme", theme)
			this.theme = theme
			document.documentElement.className = theme
		},
		getMediaPreference() {
			const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
			if (hasDarkPreference) {
				return "dark"
			} else {
				return "light"
			}
		}
	},
	mounted() {
		this.setTheme('light');
	}
}
</script>

<style scoped>
.theme-toggle {
	background: none;
	border: none;
	padding: 0;
	color: black;
	outline: none;
}
</style>
