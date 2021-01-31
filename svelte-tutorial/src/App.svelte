<script>
    import Nested from './Nested.svelte';
    import Info from './Info.svelte';
    import Loops from './Loops.svelte';
    import DispatchWrapper from './DispatchWrapper.svelte';
    import CustomButton from './CustomButton.svelte';

    export let name;
    
    let count = 0;
    $: doubled = count * 2;  // reactive value

    // reactive code

    $: console.log(count);  

    $: {
        console.log(`count is ${count}`);
        console.log(`doubled is ${doubled}`);
    }

    $: if (count >= 10) {
        console.log('count is high!');
    }

    function handleClick() {
        count += 1;
    }

    function handleMessage(event) {
        alert(event.detail.text);   
    }

    // updating arrays
    // A simple rule of thumb: the name of the updated variable must
    // appear on the left hand side of the assignment for it to be 
    // reactive.
    let numbers = [1, 2];

    function addNumber() {
        numbers = [...numbers, numbers.length + 1];
    }

    $: sum = numbers.reduce((t, n) => t + n, 0);

    const foo = {
        bar: 'one',
        baz: 'two'
    };

    let mpos = {x: 0, y: 0};

    function handleMousemove(event) {
        mpos.x = event.clientX;
        mpos.y = event.clientY;
    }

    let a = 1,
        b = 1,
        yes = false;

    let menu = ['apples', 'pears', 'oranges'],
        menuSelection = [];
</script>

<main on:mousemove={handleMousemove}>
    <h1>Hello {name}!</h1>
    
    <button on:click={handleClick}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>

    <p>{count} doubled is {doubled}</p>

    {#if count === 0}
    <p>count is zero!</p>
    {:else if count % 2 === 0}
    <p>count is even!</p>
    {:else}
    <p>count is uneven!</p>
    {/if}


    <button on:click={addNumber}>Add number</button>

    <p>{numbers.join(' + ')} = {sum}</p>

    <Nested/>
    <Nested answer={42}/>

    <Info bar={foo.bar}, baz={foo.baz}/>
    <Info {...foo}/>

    <Loops/>

    <p>The mouse is at {mpos.x}, {mpos.y}</p>
    
    <!-- event handlers -->
    <!--button with inline event handler and 'once' modifier on handler -->
    <button on:click|once="{e => alert('clicked')}">Click</button>
    <DispatchWrapper on:message={handleMessage} />
    <CustomButton on:click="{e => alert('CLICKED!')}" />

    <!-- instead of event handlers, one can bind values directly -->
    <div>
        <input bind:value={name}>
    </div>

    <label>
        <input type="checkbox" bind:checked={yes}>
        Please check.
        {#if yes}
            <span>Thank you!</span>
        {/if}
    </label>


    <label>
        <input type="number" bind:value={a} min=0 max=100>
        <input type="range" bind:value={a} min=0 max=100>
    </label>
    <label><input type="number" bind:value={b} min=0 max=100></label>
    <p>{a} * {b} = {a * b}</p>

    <!-- use a 'multiple' binding -->
  
    <select multiple bind:value={menuSelection}>
    {#each menu as flavour}
    <option value={flavour}>{flavour}</option>
    {/each}
    </select>

    <p>{menuSelection}</p>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>