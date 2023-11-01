import { CharacterModel } from "../../components/characters-list/characters-list"
import { action, initialState } from "../store/main-store"

const SET_CHARACTERS = 'SET_CHARACTERS'

export const charactersReducerActions = {
  setCharacters: SET_CHARACTERS,
}

export const charactersReducer = (state: Record<number, CharacterModel>, action: action): Record<number, CharacterModel> => {
  switch (action.type) {
    case charactersReducerActions.setCharacters:
      const { characters } = action.payload

      return characters.reduce((acc: Record<number, CharacterModel>, character) => {
        acc[character.id] = character
        return acc
      }, {})
    default:
      return state
  }
}
