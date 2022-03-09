/**
 * FilterableProductTable
      SearchBar
      ProductTable
          ProductCategoryRow
          ProductRow
 */

function SearchBar ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      {/* Since 'filterText' state is never set, the input never changes. */}
      <input
        type='text'
        placeholder='Search...'
        value={filterText}
        onChange={e => {
          onFilterTextChange(e.target.value)
        }}
      />
      <label>
        <input
          type='checkbox'
          checked={inStockOnly}
          onChange={e => {
            onInStockOnlyChange(e.target.checked)
          }}
        />
        {''}
        Only show products in stock
      </label>
    </form>
  )
}

export default SearchBar
