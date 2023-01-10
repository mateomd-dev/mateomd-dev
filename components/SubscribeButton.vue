<template>
    <div>
        <button type="button" class="btn text-nowrap btn-sm">
           <font-awesome-icon :icon="['fas', 'envelope']" />
           <span class="d-none d-sm-inline-block ps-2">SUBSCRIBE</span>
        </button>
    </div>
</template>

<style scoped>
button {
    background-color: var(--primary-color);
    color: var(--background-primary-color);
    border: none;
}

button:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
}

button:active {
    background-color: var(--primary-color);
    color: var(--secondary-color);
}

</style>