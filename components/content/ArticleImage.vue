<template>
	<div>
		<ContentSlot :use="$slots.default" :src="[src]" unwrap="img" />
	</div>
</template>

<script setup>
defineProps(['src'])
</script>
