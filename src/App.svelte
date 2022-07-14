<script>
  import TailwindCSS from "./styles/Tailwindcss.svelte";
  import CaseProvider from "./provider/CaseProvider";
  import CopyText from "./components/CopyText.svelte";

  const allCase = ["camel", "constant", "kebab", "pascal", "snake"];

  let val = "";
</script>

<TailwindCSS>
  <div class="flex justify-center min-h-screen items-center flex-col">
    <div class="mb-5">
      <h1
        class="font-normal text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Case Converter
      </h1>
    </div>
    <div class="bg-[#FCD8D4] p-5 rounded-lg w-fit shadow-2xl">
      <input
        type="text"
        placeholder="Enter string"
        class="outline-none px-1 rounded-sm w-96  focus:outline-[#FFE3B0]"
        bind:value={val}
      />
      <hr class="bg-[#8ED6FF] mt-3 h-[.1rem]" />
      {#each allCase as item}
        <div class="flex flex-row mt-5 relative">
          <p class="capitalize w-40">{item + "case: "}</p>
          <input
            class="ml-2 outline-none px-1 rounded-sm w-full  focus:outline-[#E47676] hover:outline-[#E47676] hover:bg-[#FDF6F0]"
            value={CaseProvider(item, val)}
            readonly
          />
          <CopyText val={CaseProvider(item, val)} />
        </div>
      {/each}
    </div>
  </div>
</TailwindCSS>
