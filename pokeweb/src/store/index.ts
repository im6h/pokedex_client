import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from 'src/model'
export const store = init({
	models,
})
export type Store = typeof store
export type Dispatch = RematchDispatch<>
export type RootState = RematchRootState<>
