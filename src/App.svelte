<script lang="ts">
  import Panel from "./Panel.svelte";
  import { puzzles, type PuzzleData } from "./codes";
  import { reasons } from "./reasons";
  
  let currentPuzzle: PuzzleData | null = null;
  let code: string;
  let loading = false;
  let initialLoad = true;
  let scanningReason = reasons[0];

  const checkCode = (e: SubmitEvent) => {
    e.preventDefault();
    loading = true;
    scanningReason = randomReason();

    const interval = setInterval(() => scanningReason = randomReason(), 500);
    
    setTimeout(() => {
      initialLoad = false;
      currentPuzzle = puzzles.find(puzzle => puzzle.code.exec(code.replace(/\s/, '')) !== null) ?? null;
      loading = false;
      console.log(currentPuzzle);
      clearInterval(interval);
    }, Math.random() * 3000 + 1000);
  }

  const randomReason = () => reasons[Math.floor(Math.random() * reasons.length)];

</script>
<Panel>
  <h1 class="title">
    <span>
    Project CHERRY_30
    </span>
    <span class="classification">STG. GEHEIM</span>
  </h1>
  <p>This is a private computer system and property of the people of Illien. 
    Any activity is logged, and illegal access can lead to prosecution.</p>
    <form on:submit={checkCode}>
        <p>Enter your code to query database: 
          <input type="text" class:loading disabled={loading} bind:value={code}/>
          <button type="submit">{loading ? "LOADING...": "SUBMIT"}</button>
        </p>
      </form>
      {#if loading}<span class="reason">{scanningReason}...</span>{/if}
    {#if currentPuzzle}
    <section class="puzzle">
      <h3>Next Puzzle:</h3>
      <p>{currentPuzzle.hint}</p>
      {#each currentPuzzle.urls as image}
        <img src={image} alt={currentPuzzle.hint}/>
      {/each}
    </section>
    {:else if !initialLoad && !loading}
      <h3>No data found...</h3>
    {/if}
</Panel>

<style lang="scss">
  .title{
    display: flex;
    justify-content: space-between;
    font-size: 2.4rem;
  }
  
  .classification{
    color: red;
  }

  .reason{
    color: grey;
  }

  .puzzle {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    text-transform: uppercase;
  }

  input, button{
    font-family: inherit;
    font-size: inherit;
    background: var(--c700);
    border: 0.2rem solid var(--c500);
    outline: 0.2rem solid var(--c200);
    padding: 0.5ch;
    color: inherit;
    font-weight: bold;
    width: 15ch;
  }

  input.loading{
    opacity: 0.6;
  }

  button{
    background: #373760;
    width: 12ch;

    &:hover{
      filter: brightness(2);
    }

    &:active{
      filter: brightness(0.5);
    }
  }

</style>