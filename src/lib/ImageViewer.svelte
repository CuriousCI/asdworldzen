<script lang="ts">
    import { imageViewer } from "$lib/stores";

    let src: string = "";
    imageViewer.subscribe((imageViewer) => (src = imageViewer.src));
</script>

{#if $imageViewer.open}
    <button
        class="absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/50"
        on:click={() => ($imageViewer.open = false)}
    >
        <img
            {src}
            alt="Bigger view"
            class="max-w-screen max-h-[90%] object-contain  "
        />
    </button>
{/if}
