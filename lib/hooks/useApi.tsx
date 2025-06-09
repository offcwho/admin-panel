import { useState } from "react"
import api from "../api/api"
import validator from 'validator'

export default function useApi() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const post = async (values: Record<string, string>, link: string, params: string) => {
        try {
            await api.post(
                link,
                { values, params },
                {
                    withCredentials: true,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            )

        } catch (err) {
            setError('error')
            return error
        } finally {
            setSuccess('Success')
        }
    }
    const get = async (prop: string) => {
        try {
            const response = await api.get(prop)
            setData(response.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return ({ get, post, data, loading, error, success })
}