import { useEffect, useState } from 'react'
import { getCharacters } from '../../get-characters'
import { CharacterModel } from '../../../components/characters-list/characters-list'

export const useCharacters = () => {
  const [characters, setCharacters] = useState<CharacterModel[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getCharacters()
      .then((characters) => {
        setCharacters(characters.results)
      })
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { data: characters, error, loading }
}
