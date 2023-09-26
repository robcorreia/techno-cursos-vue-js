<template>
	<div>
		<div v-if="loading">
			<Loading />
		</div>
		<div v-if="data">
			<h2>{{ data.nome }}</h2>
			<div class="video">
				<iframe :src="`https://www.youtube.com/embed/${data.youtube}`" title="YouTube video player" frameborder="0"
					allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen>
				</iframe>
			</div>
		</div>
	</div>
</template>
<script>
import fecthData from '@/mixins/fecthData';

export default {
	name: 'aula',
	props: ['aula'],
	mixins: [fecthData],
	created() {
		this.fetchData(`/aula/${this.aula}`)
	},
	beforeRouteUpdate(to, from, next) {
		this.fetchData(`/aula/${to.params.aula}`);
		next()
	}
}
</script>
<style>
.video {
	position: relative;
	padding-bottom: 56.25%;
}

.video iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>