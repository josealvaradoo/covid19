import React from 'react'
import PropTypes from 'prop-types'

export const TableHead = ({children}) => (
	<thead>{children}</thead>
)

export const TableBody = ({children}) => (
	<tbody>{children}</tbody>
)

export const TableRow = ({children}) => (
	<tr>{children}</tr>
)

export const TableColumn = ({children}) => (
	<td>{children}</td>
)


const Table = ({children, className, bordered, compacted}) => (
	<table className={`table ${className} ${bordered && 'bordered'} ${compacted && 'compacted'}`}>
		{children}
	</table>
);

Table.defaultProps = {
	className: "",
	bordered: false,
	compacted: false
}

Table.propTypes = {
	className: PropTypes.string,
	bordered: PropTypes.bool,
	compacted: PropTypes.bool,
	children: PropTypes.node.isRequired
}

export default Table