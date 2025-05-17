"use client"

import { useState, useEffect } from 'react'
import { DataTable } from './DataTable/DataTable'
import { type Item, columns } from "./DataTable/columns"

import PocketBase from 'pocketbase'
import { type RecordModel } from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090');

async function getData(): Promise<Item[]> {
  const records = await pb.collection('test').getFullList({})  

  const items: Item[] = records.map((record: RecordModel) => {
    return {
      id: record.id,
      name: record.name,
      created: record.created,
      updated: record.updated
    }
  })

  return items
}

export function ItemsTable() {
    const [items, setItems] = useState<Item[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchAndSetItems() {
            console.log("fetchAndSetItems called")
            setLoading(true)

            try {
                const fetchedData = await getData()
                console.log("Data fetched successfully:", fetchedData)
                setItems(fetchedData)
                setError(null)
            } catch (err) {
                console.error("Failed to fetch data:", err)
                if (err instanceof Error && err.message.includes("audocancelled")) {
                    console.warn("PocketBase request was autocanceled")
                } else {
                setError("Failed to load data. Please refresh the page.")
                }
            } finally {
                setLoading(false)
                console.log("Loading set to false")
            }
        }

        fetchAndSetItems()
    }, [])

    if (loading) {
        return <div>Loading Data...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return(
        <DataTable columns={columns} data={items} />
    )
}