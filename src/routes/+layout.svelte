<script lang="ts">
    import "../app.css";
    import ImageViewer from "$lib/ImageViewer.svelte";
</script>

<ImageViewer />
<div class="h-screen h-max-screen overflow-y-auto">
    <slot />
</div>
