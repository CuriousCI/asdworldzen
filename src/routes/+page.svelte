<script>
    import {
        Img,
        P,
        DeviceMockup,
        Heading,
        Timeline,
        TimelineItem,
        Card,
        Badge,
    } from "flowbite-svelte";
</script>

<div
    class="flex flex-col max-w-6xl mx-auto px-4 min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16 divide-gray-200 dark:divide-gray-800 border-x border-gray-200 dark:border-gray-600"
>
    <Heading tag="h1" id="corsi">Corsi</Heading>
    <br />
    <Heading tag="h2" id="taekwondo">Taekwon-Do ITF</Heading>
    <br />
    <div class="flex flex-wrap justify-evenly gap-5">
        <Card
            img="https://scontent-mxp1-1.cdninstagram.com/v/t39.30808-6/358036899_836935097875694_3343956534849853873_n.jpg?stp=dst-jpg_e15_s320x320&_nc_ht=scontent-mxp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=IVRpaNw8BzwAX-I70Ud&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfA5wp2vBN8v8vC5nb1epE8-ToA1UEf9K7g0q8NA6jHkLg&oe=64D6EFC3&_nc_sid=8b3546"
            class="flex-grow"
        >
            <Heading tag="h4">IIS Enrico Mattei</Heading>
            <div class="my-2">
                <Badge large color="indigo">Lunedì</Badge>
                <Badge large color="purple">Mercoledì</Badge>
            </div>
            <!-- <P class="w-56"> -->
            <!--     Cortesia, integrità, perseveranza, autocontrollo e spirito -->
            <!--     indomito -->
            <!-- </P> -->
            <P size="lg" height="normal">
                Dalle <b>19:30</b> alle <b>22:00</b>
            </P>
        </Card>
        <Card
            img="https://scontent-mxp1-1.cdninstagram.com/v/t39.30808-6/357108947_831999438369260_1334989752311409060_n.jpg?stp=c0.135.1080.1080a_dst-jpg_e15_s320x320&_nc_ht=scontent-mxp1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=FFJFQTooPqsAX9LjTil&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfAzbuAFv86z5vL35J60kPp_PDnNSb0C8sMMqgn5CgKOZw&oe=64D5EA30&_nc_sid=8b3546"
            class="flex-grow"
        >
            <Heading tag="h4">P. Piazza Grande</Heading>
            <div class="my-2">
                <Badge large color="indigo">Lunedì</Badge>
                <Badge large color="purple">Mercoledì</Badge>
                <Badge large color="pink">Venerdì</Badge>
            </div>
            <!-- <P class="mb-2"> -->
            <!--     L'arte dei calci e dei pugni in volo e difesa personale coreana. -->
            <!-- </P> -->
            <P size="lg" height="normal">
                Dalle <b>18:00</b> alle <b>19:00</b>
            </P>
        </Card>
        <Card
            img="https://scontent-mxp2-1.cdninstagram.com/v/t39.30808-6/357389462_831996555036215_1472920701624626336_n.jpg?stp=c0.135.1080.1080a_dst-jpg_e15_s320x320&_nc_ht=scontent-mxp2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=9AZEsA7NYDQAX-Vy1JS&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfA_zOuFGj-Pb70RsJOmL3lCsolvGcm9Ak7ma-nGL1msOw&oe=64D68D90&_nc_sid=8b3546"
            class="flex-grow"
        >
            <Heading tag="h4">Bad Boys Ladispoli</Heading>
            <div class="my-2">
                <Badge large color="red">Marteì</Badge>
                <Badge large color="yellow">Giovedì</Badge>
            </div>
            <P size="lg" height="normal">
                Dalle <b>17:30</b> alle <b>19:00</b>
            </P>
        </Card>
    </div>
    <br />
    <Heading tag="h2" id="taekwondo">Muay-Thai</Heading>
    <br />
    <Card
        img="https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/356264421_828579555377915_6630184794434135292_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=_LkOsfLVY6kAX8it-17&_nc_ht=scontent-mxp1-1.xx&oh=00_AfDBGaBYkZUt64BkdXTmTeljxnNC7HYdqhYIrP6ICn-IjQ&oe=64D5BDAF"
        horizontal
    >
        <Heading tag="h4">P. Piazza Grande</Heading>
        <div class="my-2">
            <Badge large color="indigo">Lunedì</Badge>
            <Badge large color="purple">Mercoledì</Badge>
            <Badge large color="pink">Venerdì</Badge>
        </div>
        <P size="lg" height="normal">
            Dalle <b>17:00</b> alle <b>18:00</b>
        </P>
    </Card>

    <!-- <Heading tag="h5">Palestra Piazza Grande</Heading> -->
    <!-- <P>Lun-Merc-Ven 17:00 18:00</P> -->
    <br />
    <br />
    <hr />
    <br />

    <Heading tag="h1" id="social">Eventi</Heading>
    <br />

    <Timeline>
        <TimelineItem title="Gara" date="15 ottobre 2022">
            <P>
                Gli atleti della World Zen parteciperanno alla gara organizzata
                da "Extreme Top Fighters"
            </P>
        </TimelineItem>
        <TimelineItem title="Inizio Corsi" date="1 settembre 2023">
            <P>I nostri corsi inizieranno il 1 settembre 2022</P>
        </TimelineItem>
        <TimelineItem title="Prova Muay-Thai" date="26 luglio 2023">
            <P>
                Vieni a provare il corso di Muay-Thai presso Palestra Piazza
                Grande a Ladispoli
            </P>
        </TimelineItem>
        <TimelineItem title="Prova Taekwon-Do" date="16 luglio 2023">
            <P>
                Vieni a provare il corso di Muay-Thai presso Palestra Piazza
                Grande a Ladispoli
            </P>
        </TimelineItem>
        <TimelineItem title="Etruria Sport Festival" date="3-4 giugno 2023">
            <P>Taekwon-Do ITF e Muay-Thai all'Etruria Sport Festival</P>
        </TimelineItem>
        <TimelineItem title="Muay-Thai + Lethwei" date="6 maggio 2023">
            <P>Stage Muay-Thai e Lethwei presso Palestra Piazza Grande</P>
        </TimelineItem>
        <TimelineItem title="Italian Lethwei Academy" date="11 marzo 2023">
            <P>Stage persso l'Italian Lethwei Academy</P>
        </TimelineItem>
    </Timeline>

    <br />
    <hr />
    <br />

    <Heading tag="h1" id="corsi">App World Zen</Heading>
    <br />
    <br />
    <div class="flex flex-wrap gap-5">
        <DeviceMockup>
            <Img src="app-1.webp" />
        </DeviceMockup>
        <DeviceMockup>
            <Img src="app-2.webp" />
        </DeviceMockup>
        <DeviceMockup>
            <Img src="app-1.webp" />
        </DeviceMockup>
    </div>

    <br />
    <br />
    <hr />
    <br />
</div>
