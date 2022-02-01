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

export default class ProductTable extends Component {
  render () {
    const filterText = this.props.filterText
    const inStockOnly = this.props.inStockOnly

    const rows = []
    let lastCategory = null

    this.props.products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return //A function immediately stops at the point where return is called.
      }

      if (inStockOnly && !product.stocked) {
        return //A function immediately stops at the point where return is called.
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
        {/*  <ProductCategoryRow />
        <ProductRow /> */}
      </>
    )
  }
}
