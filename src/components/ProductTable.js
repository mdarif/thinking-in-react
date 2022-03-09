import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

/**
 * FilterableProductTable
      SearchBar
      ProductTable
          ProductCategoryRow
          ProductRow
 */

function ProductTable ({ products, filterText, inStockOnly }) {
  const rows = []
  let lastCategory = null

  products.forEach(product => {
    // The indexOf() method returns the first index at which a given element can be found in the array,
    // or -1 if it is not present.
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return // "Blank return" statements can be used to transfer the control back to the calling function
    }

    /**
     * The logical NOT (!) operator takes truth to falsity and vice versa.
     * It is typically used with boolean (logical) values. When used with non-Boolean values,
     * it returns false if its single operand can be converted to true; otherwise, returns true.
     */
    if (inStockOnly && !product.stocked) {
      // !product.stocked is the same as product.stocked === false
      // If inStockOnly is true and product.stocked is false, return
      return
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }

    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  )
}

export default ProductTable
