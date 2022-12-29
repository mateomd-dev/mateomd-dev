<template>
    <div>
        <NuxtLayout>
			<div class="row justify-content-center mt-4">
            	<NuxtPage class="col-10" />
			</div>
        </NuxtLayout>
    </div>
</template>

<style>
@import 'bootstrap';

:root {
	--background-primary-color: #eceff4;
	--background-secondary-color: #a1a2a7;
	--foreground-primary-color: #1e2132ff;
	--foreground-secondary-color: #585858;
	--primary-color: #1e2132ff;
	--secondary-color: #678bf6ff;
	--highlight-color: #87a7e6b3;
}

* { 
	box-sizing: border-box;
}
html, body {
	padding: 0;
	margin: 0;
	font-size: 15px;
}

.highlighted {
	background: linear-gradient(to top, var(--highlight-color) 40%, transparent 10%);
	padding: 0px 3px 0px 3px;
	color: var(--foreground-color-primary);
}

h2 {
	font-family: "PlayfairDisplay";
	color: var(--foreground-primary-color);
}

@font-face {
	font-family: "PlayfairDisplay";
	font-display: auto;
    src: local("PlayfairDisplay"), url(./assets/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf) format("truetype");
    font-weight: normal;
    font-style: normal;
}

@font-face {
	font-family: "PlayfairDisplay";
	font-display: auto;
    src: local("PlayfairDisplay"), url(./assets/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf) format("truetype");
    font-weight: bold;
    font-style: normal;
}  

</style>
