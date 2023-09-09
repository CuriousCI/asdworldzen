<script lang="ts">
    import {
        Img,
        P,
        A,
        DeviceMockup,
        Heading,
        Timeline,
        TimelineItem,
        Card,
        Badge,
    } from "flowbite-svelte";

    import { MapLocationOutline } from "flowbite-svelte-icons";

    // <!-- <P class="w-56"> -->
    // <!--     Cortesia, integrità, perseveranza, autocontrollo e spirito -->
    // <!--     indomito -->
    // <!-- </P> -->
    // <!-- <P class="mb-2"> -->
    // <!--     L'arte dei calci e dei pugni in volo e difesa personale coreana. -->
    // <!-- </P> -->

    const days_colors: {
        [key: string]:
            | "red"
            | "green"
            | "yellow"
            | "indigo"
            | "purple"
            | "pink"
            | "blue"
            | "dark"
            | "primary"
            | "none"
            | undefined;
    } = {
        Lunedì: "dark",
        Martedì: "red",
        Mercoledì: "green",
        Giovedì: "yellow",
        Venerdì: "indigo",
        Sabato: "purple",
        Domenica: "pink",
    };

    const courses = [
        {
            title: "Taekwon-Do Bambini",
            schedule: [
                {
                    days: ["Lunedì", "Mercoledì"],
                    start: "18:30",
                    end: "19:30",
                },
            ],
            place: "IIS Enrico Mattei",
            maps: "https://goo.gl/maps/bNGMt6WqxCAEhWAV6",
        },
        {
            title: "Taekwon-Do Adulti 1",
            schedule: [
                {
                    days: ["Lunedì", "Mercoledì"],
                    start: "19:30",
                    end: "20:30",
                },
            ],
            place: "IIS Enrico Mattei",
            maps: "https://goo.gl/maps/bNGMt6WqxCAEhWAV6",
        },
        {
            title: "Taekwon-Do Adulti 2",
            schedule: [
                {
                    days: ["Lunedì", "Mercoledì"],
                    start: "20:30",
                    end: "22:00",
                },
            ],
            place: "IIS Enrico Mattei",
            maps: "https://goo.gl/maps/bNGMt6WqxCAEhWAV6",
        },
        {
            title: "Taekwon-Do Ladispoli",
            schedule: [
                {
                    days: ["Martedì", "Giovedì"],
                    start: "18:00",
                    end: "19:00",
                },
                {
                    days: ["Sabato"],
                    start: "17:00",
                    end: "18:00",
                },
            ],
            place: "Palestra Piazza Grande",
            maps: "https://goo.gl/maps/f5sRgVjP7CgrBq8v9",
        },
        {
            title: "Muay-Thai",
            schedule: [
                {
                    days: ["Martedì", "Giovedì"],
                    start: "17:00",
                    end: "18:00",
                },
                {
                    days: ["Sabato"],
                    start: "16:00",
                    end: "17:00",
                },
            ],
            place: "Palestra Piazza Grande",
            maps: "https://goo.gl/maps/f5sRgVjP7CgrBq8v9",
        },
    ];

    const events = [
        {
            title: "Gara",
            date: "15 ottobre 2022",
            description:
                "Gli atleti della World Zen parteciperanno alla gara organizzata da 'Extreme Top Fighters'",
        },
        {
            title: "Inizio Corsi",
            date: "1 settembre 2023",
            description: "I nostri corsi inizieranno il 1 settembre 2022",
        },
        {
            title: "Prova Muay-Thai",
            date: "26 luglio 2023",
            description:
                "Vieni a provare il corso di Muay-Thai presso Palestra Piazza Grande a Ladispoli",
        },
        {
            title: "Prova Taekwon-Do",
            date: "16 luglio 2023",
            description:
                "Vieni a provare il corso di Muay-Thai presso Palestra Piazza Grande a Ladispoli",
        },
        {
            title: "Etruria Sport Festival",
            date: "3-4 giugno 2023",
            description:
                "Taekwon-Do ITF e Muay-Thai all'Etruria Sport Festival",
        },
        {
            title: "Muay-Thai + Lethwei",
            date: "6 maggio 2023",
            description:
                "Stage Muay-Thai e Lethwei presso Palestra Piazza Grande",
        },
        {
            title: "Italian Lethwei Academy",
            date: "11 marzo 2023",
            description: "Stage persso l'Italian Lethwei Academy",
        },
    ];
</script>

<div
    class="flex flex-col bg-gray-900 max-w-6xl mx-auto px-4 min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16 divide-gray-200 dark:divide-gray-800 border-x border-gray-200 dark:border-gray-600"
>
    <Heading tag="h1" id="corsi">Corsi</Heading>
    <br />
    <div class="flex flex-wrap justify-center sm:justify-start gap-5">
        {#each courses as { title, schedule, place, maps }}
            <Card class="flex-grow">
                <Heading tag="h4">{title}</Heading>
                <div class="my-2">
                    {#each schedule as { days, start, end }}
                        <div class="flex gap-2 mb-2">
                            {#each days as day}
                                <Badge large color={days_colors[day]}>
                                    {day}
                                </Badge>
                            {/each}
                            {start} - {end}
                        </div>
                    {/each}
                </div>

                <A href={maps} color="text-black dark:text-white underline">
                    {place}
                    <MapLocationOutline class="ml-2" />
                </A>
            </Card>
        {/each}
    </div>

    <br />
    <br />
    <hr />
    <br />

    <Heading tag="h1" id="eventi">Eventi</Heading>
    <br />

    <div class="flex flex-col md:flex-row gap-5 items-center">
        <div
            class="w-full md:w-[45%] relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
            <div
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md"
            >
                <Timeline>
                    {#each events as { title, date, description }}
                        <TimelineItem {title} {date}>
                            <P>
                                {description}
                            </P>
                        </TimelineItem>
                    {/each}
                </Timeline>
            </div>
        </div>

        <img
            src="g5.png"
            alt="Gunnun Sogi Taekwondo ITF poster"
            class="h-min"
        />
    </div>

    <br />
    <hr />
    <br />

    <Heading tag="h1" id="app">App World Zen</Heading>
    <br />
    <br />

    <div
        class="w-full relative inline-flex items-center justify-center px-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
    >
        <div
            class="w-full px-5 py-2.5 rounded-lg bg-gray-900 flex flex-wrap gap-5 justify-center md:justify-evenly items-center"
        >
            <DeviceMockup device="android" class="m-0">
                <Img src="app-1.webp" class="p-2 box-border" />
            </DeviceMockup>
            <DeviceMockup device="android" class="m-0">
                <Img src="app-2.webp" class="p-2" />
            </DeviceMockup>
            <DeviceMockup device="android" class="m-0">
                <Img src="app-1.webp" class="p-2" />
            </DeviceMockup>
        </div>
    </div>

    <br />
    <br />
    <hr />
    <br />

    <Heading tag="h1" id="contatti">Contatti</Heading>
    <br />

    <div class="flex flex-col md:flex-row gap-5 items-start">
        <div
            class="w-fit relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
            <Card size="md">
                <P>
                    Marcelo Valente (Master VII Dan)
                    <A
                        href="tel:+393932214993"
                        color="text-black dark:text-white underline ml-2"
                    >
                        +39 3932214993
                    </A>
                </P>

                <P>
                    Andrea Bertolini (Istruttore III Dan)
                    <A
                        href="tel:+393479323760"
                        color="text-black dark:text-white underline ml-2"
                    >
                        +39 3479323760
                    </A>
                </P>
                <P>
                    Bryan Carfagna (Istruttore II Dan)
                    <A
                        href="tel:+393487474257"
                        color="text-black dark:text-white underline ml-2"
                    >
                        +39 3487474257
                    </A>
                </P>
            </Card>
        </div>
        <img
            src="g6.png"
            alt="Gunnun Sogi Taekwondo ITF poster"
            class="h-min"
        />
    </div>
    <br />
</div>
