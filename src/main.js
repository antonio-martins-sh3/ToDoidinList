import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Aura from '@primevue/themes/aura'
import Textarea from 'primevue/textarea'
import Card from 'primevue/card'
import FloatLabel from 'primevue/floatlabel'
import Panel from 'primevue/panel'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
})
app.use(ToastService)
app.use(router)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Toast', Toast)
app.component('Textarea', Textarea)
app.component('Card', Card)
app.component('FloatLabel', FloatLabel)
app.component('Panel', Panel)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)

app.mount('#app')
