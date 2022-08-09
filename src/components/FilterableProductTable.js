import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

/**
 * FilterableProductTable
      SearchBar
      ProductTable
          ProductCategoryRow
          ProductRow
 */

function FilterableProductTable ({ products }) {
  const [filterText, setFilterText] = useState('fruit')
  const [inStockOnly, setInStockOnly] = useState(false)

  console.log('Parent state filterText: ', filterText)

  /**
   * You want to make it so whenever the user changes the form inputs,
   * the state updates to reflect those changes. The state is owned by
   * FilterableProductTable, so only it can call setFilterText
   * and setInStockOnly.
   *
   * To let SearchBar update the FilterableProductTable’s state,
   * you need to pass these functions down to SearchBar
   */

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}

export default FilterableProductTable
