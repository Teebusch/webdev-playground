<script>
    let cats = [
        {name: "Pipi", coat: "black"},
        {name: "Nono", coat: "calico"}, 
        {name: "Risotto", coat: "tortoise"}
    ]
</script>

<ul>
    {#each cats as cat, i}
    <li>({i + 1}) <strong>{cat.name}</strong> - {cat.coat}</li>
    {/each}
</ul>

<!-- using destructuring -->

<ul>
    {#each cats as {name, coat}, i}
    <li>({i + 1}) <strong>{name}</strong> - {coat}</li>
    {/each}
</ul>