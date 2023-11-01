import { charactersReducer } from '../characters-reducer'
import { initialCharactersStore } from './characters-store'
import { CharacterModel } from '../../components/characters-list/characters-list'

export const initialState = {
  characters: initialCharactersStore,
}

export type action = {
  type: string,
  payload: { 
    characters: CharacterModel[]
  }
}

export const mainReducer = (state: Record<number, CharacterModel>, action: action) => ({
  characters: charactersReducer(state, action),
})