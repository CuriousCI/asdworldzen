<script lang="ts">
    import { onMount } from "svelte";
    import Section from "../lib/Section.svelte";

    const social = [
        {
            alt: "YouTube",
            href: "https://youtube.com/@ASDWorldZen",
            src: "youtube.webp",
        },
        {
            alt: "Instagram",
            href: "https://www.instagram.com/asdworldzen/",
            src: "instagram.webp",
        },
        {
            alt: "Facebook",
            href: "https://www.facebook.com/taekwondoworldzen",
            src: "facebook.webp",
        },
        {
            alt: "App",
            href: "https://app.worldzen.it",
            src: "favicon.png",
        },
    ];

    onMount(() => {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
</script>

<main class="relative w-full h-screen bg-black">
    <video
        autoplay
        muted
        loop
        id="background"
        class="w-full h-full"
        playsinline
    >
        <source src="/background.mp4" type="video/mp4" />
        <source src="/background.webm" type="video/webm" />
        <track
            src="captions_en.vtt"
            kind="captions"
            srclang="en"
            label="english_captions"
        />
    </video>

    <div
        class="absolute top-0 w-full h-full grid place-items-center bg-gradient-to-b from-black/60 to-black/80"
    >
        <div class="p-10">
            <a href="https://app.worldzen.it">
                <img src="worldzen.svg" alt="World Zen" />
            </a>
            <div class="w-full flex justify-between">
                <div class="flex items-center gap-2 sm:gap-5">
                    {#each social as { alt, href, src }}
                        <a {href} target="_blank" rel="noreferrer">
                            <img
                                {src}
                                {alt}
                                class="sm:h-14 md:h-20 drop-shadow-2xl"
                                height="32"
                            />
                        </a>
                    {/each}
                </div>
                <a
                    href="tel:+393932214993"
                    class="text-2xl sm:text-3xl md:text-6xl font-extrabold"
                >
                    3932214993
                </a>
            </div>
        </div>
    </div>
</main>

<Section
    title="Corsi"
    icon="sports_martial_arts"
    background="bg-gradient-to-tr from-black to-red-900"
>
    <img
        src="muay-thai-lethwei.webp"
        alt="World Zen"
        class="max-h-screen md:max-h-[40vh]"
    />
    <img
        src="worldzen.webp"
        alt="World Zen"
        class="max-h-screen md:max-h-[40vh]"
    />
    <img src="m13k.webp" alt="M13K" class="max-h-screen md:max-h-[40vh]" />
    <img
        src="insta.webp"
        alt="Instagram"
        class="max-h-screen md:max-h-[40vh]"
    />
</Section>

<Section
    title="Contatti"
    icon="call"
    background="bg-gradient-to-br from-black to-red-900"
>
    <div class="flex flex-col">
        <h1 class="text-4xl font-bold mb-3">Taekwon-Do</h1>
        <span class="flex gap-2 text-3xl">
            <h2 class="text-3xl font-bold">Sabum <i> Marcelo Valente </i>:</h2>
            <a href="tel:3932214993"> 3932214993</a>
        </span>
        <span class="text-2xl">
            Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri
        </span>
        <span class="text-2xl mb-2">Lunedì e mercoledì 19:30-22:00</span>
        <span class="flex gap-2 text-3xl">
            <h2 class="text-3xl font-bold">Bosabum <i> Bryan Carfagna </i>:</h2>
            <a href="tel:3487474257">3487474257</a>
        </span>
        <span class="text-2xl">
            Presso ASD Bad Boys, via Aldo Moro 39, Ladispoli
        </span>
        <span class="text-2xl mb-6">Martedì e giovedì 17:30-19:00</span>
        <h1 class="text-4xl font-bold mb-2">Muay-Thai</h1>
        <h2 class="text-3xl mb-2">M.13.K. Ṣ̄ilpa k̄hæn s̄ib s̄ām</h2>
        <h2 class="text-3xl font-bold">Kru<i> Bryan Carfagna </i>:</h2>
        <span class="text-2xl">
            Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri
        </span>
        <span class="text-2xl">Lunedì e mercoledì 18:30-19:30</span>
    </div>
</Section>

<!-- location -->
<ins
    class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-9406040528414499"
    data-ad-slot="8074776384"
    data-ad-format="auto"
    data-full-width-responsive="true"
/>

<Section
    title="Dove trovarci?"
    icon="pin_drop"
    background="bg-gradient-to-tr from-black to-red-900"
>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1482.8276627044584!2d12.093015358279207!3d41.9862094885059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f55f7f522e8f1%3A0xad7e3e210563e7b5!2sASD%20World%20Zen!5e0!3m2!1sen!2sit!4v1676199409781!5m2!1sen!2sit"
        class="w-full md:w-[48%] h-[50vh]"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="World Zen Cerveteri"
    />
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.6080530014383!2d12.074612215801183!3d41.96575306790258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f557ac78afc8b%3A0x3fb0019c18fedb81!2sASD%20Bad%20Boys!5e0!3m2!1sen!2sit!4v1676199434829!5m2!1sen!2sit"
        class="w-full md:w-[48%] h-[50vh]"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="World Zen Ladispoli"
    />
</Section>

<Section
    title="Martial Arts App"
    icon="download"
    href="https://app.worldzen.it"
    background="bg-gradient-to-br from-black to-red-900"
>
    <img src="app-1.webp" alt="App 1" class="h-[70vh]" />
    <img src="app-2.webp" alt="App 2" class="h-[70vh]" />
</Section>

<ins
    class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-9406040528414499"
    data-ad-slot="5257041353"
    data-ad-format="auto"
    data-full-width-responsive="true"
/>

<style>
    #background {
        object-fit: cover;
    }

    img,
    iframe {
        filter: drop-shadow(10px 10px 8px rgba(0 0 0 / 1));
    }

    a {
        text-shadow: 10px 10px 8px #000;
    }
</style>
