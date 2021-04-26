// this provides an endpoint that returns a list of all blog posts as json
// https://kit.svelte.dev/docs#routing-endpoints

// Uses Vite glob import to import all md
const modules = import.meta.glob('./**/*.md')

export async function get({ params }) {

  const posts = Object.entries(modules)
    .map(([path, content]) => {
        let meta = content().then(c => c.metadata);
        meta['path'] = path;
        return meta
    })

	return {
    status: 200,
		body: await Promise.all(posts)
	};
}