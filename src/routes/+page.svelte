<script lang="ts">
    import Section from "../lib/Section.svelte";
</script>

<main class="relative w-full h-screen bg-black">
    <video autoplay muted loop id="background" class="w-full h-full">
        <source src="/background.mp4" type="video/mp4" />
        <source src="/background.webm" type="video/webm" />
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
                    <a
                        href="https://youtube.com/@ASDWorldZen"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="youtube-2.png"
                            alt="YouTube"
                            class="h-8 sm:h-14 md:h-20 drop-shadow-2xl"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/asdworldzen/ "
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="instagram-1.png"
                            alt="Instagram"
                            class="h-8 sm:h-14 md:h-20"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/taekwondoworldzen"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="facebook-1.png"
                            alt="Facebook"
                            class="h-8 sm:h-14 md:h-20"
                        />
                    </a>
                    <img
                        src="favicon.png"
                        alt="App"
                        class="hidden md:visible md:h-20"
                    />
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
    title="Taekwon-Do App"
    icon="download"
    href="https://app.worldzen.it"
    background="bg-gradient-to-tr from-black to-red-900"
>
    <img src="app-1.png" alt="App 1" class="h-[70vh]" />
    <img src="app-2.png" alt="App 2" class="h-[70vh]" />
    <img src="app-3.png" alt="App 3" class="h-[70vh]" />
    <img src="app-4.png" alt="App 4" class="h-[70vh]" />
    <img src="app-5.png" alt="App 5" class="h-[70vh]" />
</Section>

<Section
    title="Corsi"
    icon="sports_martial_arts"
    background="bg-gradient-to-br from-black to-red-900"
>
    <img
        src="worldzen.png"
        alt="World Zen"
        class="max-h-screen md:max-h-[50vh]"
    />
    <img src="m13k.png" alt="M13K" class="max-h-screen md:max-h-[50vh]" />
    <img src="insta.png" alt="Instagram" class="max-h-screen md:max-h-[50vh]" />
</Section>

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
