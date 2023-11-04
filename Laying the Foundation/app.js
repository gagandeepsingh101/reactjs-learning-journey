import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// const jsxTable = (
// 	<div>
// 		<table>
// 			<thead>
// 				<tr>
// 					<th>S.No</th>
// 					<th>Name</th>
// 					<th>Email</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				<tr>
// 					<td>1</td>
// 					<td>Gagan</td>
// 					<td>avfgfg@gmail.com</td>
// 				</tr>
// 				<tr>
// 					<td>1</td>
// 					<td>Gagan</td>
// 					<td>avfgfg@gmail.com</td>
// 				</tr>
// 				<tr>
// 					<td>1</td>
// 					<td>Gagan</td>
// 					<td>avfgfg@gmail.com</td>
// 				</tr>
// 			</tbody>
// 		</table>
// 	</div>
// );

// root.render(jsxTable);

// React Function Component
const HeadingComponent = () => <h1>User Data Displayed</h1>;

const TableHeadingComponent = () => (
	<tr>
		<th>S. No</th>
		<th>Name</th>
		<th>Age</th>
	</tr>
);

// Component Composition
const TableComponent = () => (
	<table>
		<thead>
			{TableHeadingComponent()}
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Gagan</td>
				<td>20</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Param</td>
				<td>10</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Sukh</td>
				<td>21</td>
			</tr>
		</tbody>
	</table>
);
let count = 0;
const TableWithHeader = () => {
	return (
		<>
			<h1> {count=count+1}</h1>
			<HeadingComponent></HeadingComponent>
			<TableComponent></TableComponent>
		</>
	);
};

root.render(<TableWithHeader />);
