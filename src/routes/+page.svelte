<!--TODO App preview section with/ 1 screenshots -->

<main class="relative w-full h-screen bg-black">
    <video autoplay muted loop id="background" class="w-full h-full">
        <source src="/background.mp4" type="video/mp4" />
    </video>

    <div class="absolute top-0 left-0 w-full h-full grid place-items-center">
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
                            src="youtube.png"
                            alt="YouTube"
                            class="h-7 md:h-16 drop-shadow-2xl"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/taekwondoworldzen"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="facebook.png"
                            alt="Facebook"
                            class="h-7 md:h-16"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/asdworldzen/ "
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="instagram.png"
                            alt="Instagram"
                            class="h-7 md:h-16"
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

<main class="w-full min-h-min bg-gradient-to-br from-gray-900 to-red-900">
    <!-- <main class="w-full min-h-min bg-gradient-to-br from-black to-gray-900"> -->
    <div
        class="min-w-min h-full flex flex-wrap gap-2 px-10 py-10 items-center justify-between"
    >
        <img
            src="worldzen.png"
            alt="World Zen"
            class="max-h-screen md:max-h-[50vh]"
        />
        <img src="m13k.png" alt="M13K" class="max-h-screen md:max-h-[50vh]" />
        <img
            src="insta.png"
            alt="Instagram"
            class="max-h-screen md:max-h-[50vh]"
        />
    </div>
</main>

<main class="w-full min-h-min bg-gradient-to-tr from-gray-900 to-red-900">
    <div
        class="min-w-min h-full flex flex-wrap gap-2 px-10 py-10 items-center justify-between"
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
    </div>
</main>

<!-- <main class="w-full h-screen grid place-items-center" /> -->
<!-- <footer class="bg-gray-900"> -->
<!--     <a href="mailto:worldzen24@gmail.com">worldzen24@gmail.com</a> -->

<!-- </footer> -->
<style>
    #background {
        object-fit: cover;
    }

    img,
    iframe {
        filter: drop-shadow(10px 10px 8px rgba(0 0 0 / 1));
        /* filter: drop-shadow(10px 10px 8px rgb(0 0 0 / 1)); */
    }

    a {
        text-shadow: 10px 10px 8px #000;
    }
</style>
