"use client"

import type { ColumnDef } from "@tanstack/react-table"

export type Item = {
    id: string,
    name: string,
    created: string,
    updated: string
}

export const columns: ColumnDef<Item>[] = [
    {
        accessorKey: "name",
        header: "Name"
    }
]