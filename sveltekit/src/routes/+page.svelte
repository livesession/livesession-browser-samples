<script>
  import ls from '@livesession/browser';
  
  let count = 0;
  
  function increment() {
    count += 1;
    ls.track('Counter', { count });
  }
  
  function decrement() {
    count -= 1;
    ls.track('Counter', { count });
  }
</script>

<h1>Welcome to SvelteKit + LiveSession</h1>
<p>Visit <a href="https://livesession.dev">livesession.dev</a> to read the documentation</p>

<div class="counter">
  <button on:click={decrement}>-</button>
  <span>{count}</span>
  <button on:click={increment}>+</button>
</div>

<style>
  .counter {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 2rem 0;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  span {
    font-size: 1.5rem;
    min-width: 3rem;
    text-align: center;
  }
</style>