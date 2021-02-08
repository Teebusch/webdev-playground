<script>
    import axios from "axios"
    import {onMount} from "svelte"

    let users = [];

    onMount(async () => {
        const { data } = await axios.get('http://127.0.0.1:3000/rooms')
        users = data;
    });
</script>

<main>
	<h1>Hello</h1>
    { JSON.stringify(users) }
</main>