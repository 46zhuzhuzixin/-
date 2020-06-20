import Vue from 'vue'
import back from '../components/background'
import homeIndexOne from '../components/homeIndex/tabOne'
import echartPie from '../components/echartsPie'
import bgcord from '../components/backgroundCard'
export default (Vue) => {
	Vue.component("back", back)
	Vue.component("homeIndexOne", homeIndexOne)
	Vue.component("echartPie", echartPie)
	Vue.component("bgcord", bgcord)
}
