const KEY = 'VUEX:STATE'
export default function persistPlugin(options) {
    return (Store) => {
        // 存
        window.addEventListener('beforeunload',()=>{
            localStorage.setItem(KEY,JSON.stringify(Store.state))
        },false)

        // 取
        try {
        const state = JSON.parse(localStorage.getItem(KEY))
        if(state){
            Store.replaceState(state)
        }
        } catch (error) {
            console.log('持久化数据获取失败')
        }


    }
}