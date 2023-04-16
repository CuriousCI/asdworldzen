<script lang="ts">
    export let title: string = "",
        icon: string = "",
        href: string = "https://app.worldzen.it",
        background: string = "";
</script>

<section class="w-full min-h-min p-10 {background}">
    <a {href}>
        <h2
            class="text-2xl sm:text-4xl md:text-5xl mb-10 font-bold flex items-center gap-2"
        >
            {title}
            <i
                class="material-symbols-outlined text-2xl sm:text-4xl md:text-5xl"
            >
                {icon}
            </i>
        </h2>
    </a>
    <div
        class="w-full flex flex-wrap justify-center md:justify-start items-center gap-4"
    >
        <slot />
    </div>
</section>
