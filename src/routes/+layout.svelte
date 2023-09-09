<script lang="ts">
    import "../app.css";
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Footer,
        FooterIcon,
        FooterCopyright,
    } from "flowbite-svelte";

    import {
        FacebookSolid,
        CameraFotoSolid,
        YoutubeSolid,
    } from "flowbite-svelte-icons";
</script>

<div class="h-screen flex flex-col">
    <Navbar
        let:hidden
        let:toggle
        class="dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 z-50 h-min"
    >
        <NavBrand href="/">
            <img
                src="/favicon.png"
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
            />
            <span
                class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
            >
                ASD World Zen
            </span>
        </NavBrand>
        <NavHamburger on:click={toggle} />
        <NavUl {hidden}>
            <NavLi href="/" active={true}>Home</NavLi>
            <NavLi href="#corsi">Corsi</NavLi>
            <NavLi href="#eventi">Eventi</NavLi>
            <NavLi href="#app">App</NavLi>
            <NavLi href="#contatti">Contatti</NavLi>
        </NavUl>
    </Navbar>

    <div class="w-full overflow-y-auto h-full" id="bg">
        <slot />

        <Footer footerType="sitemap">
            <div
                class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between"
            >
                <FooterCopyright
                    spanClass="text-sm text-gray-300 sm:text-center"
                    href="/"
                    by="ASD World Zen™"
                />
                <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                    <FooterIcon href="/" class="text-gray-400 hover:text-white">
                        <FacebookSolid />
                    </FooterIcon>
                    <FooterIcon href="/" class="text-gray-400 hover:text-white">
                        <CameraFotoSolid />
                    </FooterIcon>
                    <FooterIcon href="/" class="text-gray-400 hover:text-white">
                        <YoutubeSolid />
                    </FooterIcon>
                </div>
            </div>
        </Footer>
    </div>
</div>

<!-- <FooterLinkGroup -->
<!--     ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0" -->
<!-- > -->
<!--     <FooterLink href="tel:+393932214993"> -->
<!--         +39 3932214993 -->
<!--     </FooterLink> -->
<!-- <FooterLink href="tel:+393487474257"> -->
<!--     +39 3487474257 -->
<!-- </FooterLink> -->
<!-- <FooterLink href="tel:+393487474257"> -->
<!--     +39 3487474257 -->
<!-- </FooterLink> -->
<!-- <FooterLink href="/">Privacy Policy</FooterLink> -->
<!-- <FooterLink href="/">Licensing</FooterLink> -->
<!-- <FooterLink href="/">Contact</FooterLink> -->
<!-- </FooterLinkGroup> -->
