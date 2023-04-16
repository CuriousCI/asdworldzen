<script lang="ts">
    import { onMount } from "svelte";
    import { view } from "$lib/stores";

    import Section from "$lib/Section.svelte";
    import Social from "$lib/Social.svelte";

    const gallery = [
        "muay-thai-lethwei-palestra-piazza-grande-ladispoli-stage-aperto-kru-instagram-world-zen-italian-lethwei-academy.jpg",
        "taekwondo-corsi-cerveteri-ladispoli-world-zen-muay-thai-asd-badboys-mattei-kickboxing-k1-sanda-combattimento-difesa-personale.jpg",
        "taekwondo-asd-badboys-ladispoli-world-zen-itf.jpg",
        "muay-thai-m13k-cerveteri-mattei-world-zen.jpg",
    ];

    onMount(() => {
        // @ts-ignore
        // (window.adsbygoogle = window.adsbygoogle || []).push({});
        // @ts-ignore
        // (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
</script>

<main class="relative w-full h-screen bg-black">
    <video
        autoplay
        muted
        loop
        preload="none"
        id="background"
        class="w-full h-full"
        poster="worldzen-youtube-canale-combattimento-sport-taekwondo-video-copertina-cerveteri-ladispoli-muay-thai-asd-culturale-associazione-sportiva-club-sportivo.jpg"
        playsinline
    >
        <source
            src="/asd-world-zen-youtube-canale-sport-taekwondo-muay-thai-combattimento-potenza-velocita-agilita.mp4"
            type="video/mp4"
        />
        <source
            src="/asd-world-zen-youtube-canale-sport-taekwondo-muay-thai-combattimento-potenza-velocita-agilita.webm"
            type="video/webm"
        />
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
                <img
                    src="world-zen-asd-culturale-sport-taekwondo-muay-thai-titolo-logo-nome.svg"
                    alt="World Zen"
                />
            </a>
            <div
                class="w-full flex justify-center gap-4 items-center flex-wrap"
            >
                <div class="flex items-center gap-2 sm:gap-5">
                    <Social />
                </div>
                <a
                    href="tel:+393932214993"
                    class="text-5xl sm:text-6xl md:text-6xl font-extrabold"
                >
                    3932214993
                </a>
            </div>
        </div>
    </div>
</main>

<Section
    title="Galleria"
    icon="sports_martial_arts"
    background="bg-gradient-to-tr from-black to-red-900"
>
    {#each gallery as image}
        <button
            on:click={() => {
                view(image);
            }}
        >
            <img
                src={image}
                alt="World Zen {image} Taekwon-Do Muay-Thai"
                class="max-h-screen md:max-h-[30vh]"
                loading="lazy"
            />
        </button>
    {/each}
</Section>

<Section
    title="Contatti"
    icon="call"
    background="bg-gradient-to-br from-black to-red-900"
>
    <div class="flex flex-col gap-4">
        <div>
            <h2 class="text-amber-300">Taekwon-Do</h2>
            <div class="flex gap-2">
                <p><b>Sabum <i> V. Marcelo </i></b>:</p>
                <a href="tel:3932214993"><p>3932214993</p></a>
            </div>
            <p class="text-gray-300">
                Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri
            </p>
            <p class="font-bold italic underline text-amber-200">
                Lunedì e mercoledì 19:30-22:00
            </p>
        </div>
        <div>
            <span class="flex gap-2">
                <p class="font-bold">Bosabum <i> C. Bryan </i>:</p>
                <a href="tel:3487474257"><p>3487474257</p></a>
            </span>
            <p class="text-gray-300">
                Presso ASD Bad Boys, via Aldo Moro 39, Ladispoli
            </p>
            <p class="font-bold italic underline text-amber-200">
                Martedì e giovedì 17:30-19:00
            </p>
        </div>
        <div>
            <h2 class="text-amber-300">Muay-Thai</h2>
            <h3>M.13.K. Ṣ̄ilpa k̄hæn s̄ib s̄ām</h3>
            <span class="flex gap-2">
                <p><b>Kru <i> C. Bryan </i>:</b></p>
                <a href="tel:3487474257"><p>3487474257</p></a>
            </span>
            <p class="text-gray-300">
                Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri
            </p>
            <p class="font-bold italic underline text-amber-200">
                Lunedì e mercoledì 18:30-19:30
            </p>
        </div>
    </div>
</Section>

<!-- location -->
<!-- <ins -->
<!--     class="adsbygoogle" -->
<!--     style="display:block" -->
<!--     data-ad-client="ca-pub-9406040528414499" -->
<!--     data-ad-slot="8074776384" -->
<!--     data-ad-format="auto" -->
<!--     data-full-width-responsive="true" -->
<!-- /> -->

<Section
    title="Dove trovarci?"
    icon="pin_drop"
    background="bg-gradient-to-tr from-black to-red-900"
>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1482.8276627044584!2d12.093015358279207!3d41.9862094885059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f55f7f522e8f1%3A0xad7e3e210563e7b5!2sASD%20World%20Zen!5e0!3m2!1sen!2sit!4v1676199409781!5m2!1sen!2sit"
        class="w-full md:w-[48%] h-[50vh] border-0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="World Zen Cerveteri"
    />
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.6080530014383!2d12.074612215801183!3d41.96575306790258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f557ac78afc8b%3A0x3fb0019c18fedb81!2sASD%20Bad%20Boys!5e0!3m2!1sen!2sit!4v1676199434829!5m2!1sen!2sit"
        class="w-full md:w-[48%] h-[50vh] border-0"
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

<!-- <ins -->
<!--     class="adsbygoogle" -->
<!--     style="display:block" -->
<!--     data-ad-client="ca-pub-9406040528414499" -->
<!--     data-ad-slot="5257041353" -->
<!--     data-ad-format="auto" -->
<!--     data-full-width-responsive="true" -->
<!-- /> -->

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
