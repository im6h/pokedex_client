import { createModel } from '@rematch/core'
import api from 'src/service/ability'
import { List, listInstance } from './interface/list'
import { Ability, abilityInstance } from './interface/ability'
import { RootModel } from '.'

type AbilityState = {
	abilities: List
	ability: Ability
}

export const ability = createModel<RootModel>()({
	state: {
		abilities: {},
		ability: {},
	} as AbilityState,

	reducers: {
		setAbilities(state, payload: List) {
			return {
				...state,
				abilities: payload,
			}
		},
		setAbility(state, payload: Ability) {
			return {
				...state,
				ability: payload,
			}
		},
	},

	effects: (dispatch) => ({
		async getAbilities(offset: number) {
			const res = await api.getAbilites(offset)
			if (res.status === 200 && res.data) {
				dispatch.ability.setAbilities(res.data)
			} else {
				dispatch.ability.setAbilities(listInstance)
			}
		},
		async getAbility(id: number) {
			const res = await api.getAbility(id)
			if (res.status === 200 && res.data) {
				dispatch.ability.setAbility(res.data)
			} else {
				dispatch.ability.setAbility(abilityInstance)
			}
		},
	}),
})
