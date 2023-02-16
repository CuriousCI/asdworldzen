<script lang="ts">
    export let title: string = "",
        icon: string = "",
        href: string = "",
        background: string = "";
</script>

<section class="w-full min-h-min p-10 {background}">
    <a {href} id="title">
        <h1 class="text-5xl mb-10 font-bold">
            {title}
            <span class="material-symbols-outlined text-5xl relative top-2">
                {icon}
            </span>
        </h1>
    </a>
    <div
        class="w-full flex flex-wrap justify-center md:justify-start items-center gap-4"
    >
        <slot />
    </div>
</section>
