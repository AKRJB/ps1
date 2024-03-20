"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ProductDetails = {
  title: string
  category: string
  subcategory?: string

}

export const columns: ColumnDef<ProductDetails, any>[] = [
  {
    accessorKey: "title",
    header: "Products",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "subcategory",
    header: "sub-category",
  }
]
