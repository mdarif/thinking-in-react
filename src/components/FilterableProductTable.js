import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

/**
 * FilterableProductTable
      SearchBar
      ProductTable
          ProductCategoryRow
          ProductRow
 */

class FilterableProductTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText
    })
  }

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render () {
    return (
      <>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          products={this.props.products}
        />
      </>
    )
  }
}

export default FilterableProductTable
