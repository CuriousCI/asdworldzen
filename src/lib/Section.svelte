<script lang="ts">
    export let title: string = "",
        href: string = "https://app.worldzen.it",
        background: string = "";
</script>

<section class="w-full min-h-min p-10 {background}">
    <a {href}>
        <h2 class="text-2xl sm:text-4xl md:text-5xl mb-10 font-bold">
            {title}
        </h2>
    </a>
    <div
        class="w-full flex flex-wrap justify-center md:justify-start items-center gap-4"
    >
        <slot />
    </div>
</section>
