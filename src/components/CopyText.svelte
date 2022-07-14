<script>
  export let val;
  let isCopy = true;
  let isHover = false;

  const handleClick = () => {
    navigator.clipboard.writeText(val);
    isCopy = !isCopy;
    isHover = false;

    setTimeout(() => {
      isCopy = true;
    }, 2000);
  };

  const handleMouseOver = () => {
    isHover = true;
  };
  const handleMouseOut = () => {
    isHover = false;
  };
</script>

{#if isCopy}
  <div on:mouseenter={handleMouseOver} on:mouseleave={handleMouseOut}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-copy absolute right-0.5 top-1 hover:cursor-pointer hover:bg-slate-200 hover:rounded-sm duration-200 ease-in-out bg-white"
      on:click={handleClick}
      ><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path
        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
      /></svg
    >
  </div>
  {#if isHover}
    <div
      class="absolute right-[-2.5rem] top-[-130%] flex flex-col items-center mb-6 group-hover:flex"
    >
      <span
        class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg duration-200 rounded-lg"
        >CLick to Copy</span
      >
      <div class="w-3 h-3 -mt-2 rotate-45 bg-black" />
    </div>
  {/if}
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-copy absolute right-0.5 top-1 hover:cursor-pointer duration-200 ease-in-out text-green-400"
    ><polyline points="20 6 9 17 4 12" /></svg
  >
{/if}
