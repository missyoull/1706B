declare module "*.vue" {
    import Vue from 'vue'
    export default Vue
}

declare module 'vue/types/vue' {
    interface Vue {
        [key: string]: any
    }
}

declare const wx:any;