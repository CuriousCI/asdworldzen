import { writable, type Writable } from "svelte/store";

export interface ImageViewer {
    src: string,
    open: boolean,
}

export const imageViewer: Writable<ImageViewer> = writable({ src: '', open: false });

export function view(src: string) {
    imageViewer.set({ src, open: true })
}
