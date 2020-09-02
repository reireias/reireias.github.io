import { InjectionKey } from '@vue/composition-api'
import { TitleStore } from '@/stores/title'

const TitleStoreKey: InjectionKey<TitleStore> = Symbol('TitleStore')
export default TitleStoreKey
