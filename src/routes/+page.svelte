<script lang="ts">
	import { browser } from '$app/environment';

	import * as Threlte from '@threlte/core';
	import { GLTF } from '@threlte/extras';
	import * as Three from 'three';

	let camera = {
		position: { x: 10, y: 10, z: 10 },
		zoom: 40
	};

	let ghost = {
		position: { x: 0, y: 2, z: 0 },
		scale: 0.4
	};

	let pointLight = {
		position: { x: 0, y: 1.9, z: 2 },
		color: 'hsl(60, 100%, 50%)',
	};
	
	function float() {
		const timeInSeconds = Date.now() / 1000;
		const offsetY = 2.9;
		ghost.position.y = Math.sin(timeInSeconds) + offsetY;
		requestAnimationFrame(float);
	}

	if (browser) {
		float();
	}

</script>

<Threlte.Canvas rendererParameters={{ antialias: true }}>

	<Threlte.OrthographicCamera {...camera}>
		<Threlte.OrbitControls />
	</Threlte.OrthographicCamera>

	<Threlte.AmbientLight color="blue" intensity={4} />
	<Threlte.PointLight intensity={0.2} {...pointLight} />
	<Threlte.PointLight intensity={1} position={{ x: 0, y: 2, z: 2 }} color="blue" />
	
	<GLTF url="models/ghost.glb" {...ghost} />
	<GLTF url="models/garden.glb"  />
</Threlte.Canvas>
