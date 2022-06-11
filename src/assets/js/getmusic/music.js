export const getMixins = {
    methods: {
        bofan(key) {
            this.$request({ url: '/song/url', params: { id: key } }, 'A')
                .then(res => {
                    this.$parent.url = res.data.data[0].url
                })
        },
        //日期转换
        getdate(time) {
            let m = parseInt(time / 1000 / 60)
            let s = parseInt(time / 1000 % 60) > 10 ? parseInt(time / 1000 % 60) : `0${parseInt(time/1000%60)}`
            return `${m}:${s}`
        },

    },
}
export const getMv = {
    methods: {
        toMv(id) {
            this.$router.push(`/index/mv/${id}`)
            this.$bus.$emit('checkMv')
        }
    },
}