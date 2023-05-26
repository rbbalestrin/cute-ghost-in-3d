import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['three', 'troika-three-text'],
  },
  build: {
	rollupOptions: {
	  external: [
		 /^node:.*/,
	  ]
	}
 }
}

export default config
