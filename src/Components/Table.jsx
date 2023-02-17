import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Styles/Table.css";

function createData(cname, pname, pid, size, cost, status) {
  return { cname, pname, pid, size, cost, status };
}

const rows = [
  createData("Clubman", "Beard Oil",123456,"10 ml", "17$ CAD", "2"),
  createData("Gatsby", "Hair Wax",456789,"50 ml","20$ CAD", "6"),
  createData("WoW", "Hai Oil",789123,"100 gm","15$ CAD", "10"),
  createData("Treseme", "Hair Spray",147852,"150 ml","7$ CAD", "12"),
];


const makeStyle=(status)=>{
  if(status <= 5)
  {
    return {
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else if(status >= 10)
  {
    return{
      background: 'rgb(145 254 159 / 47%)',
      color: 'Green',
    }
  }
  else{
    return{
      background: 'yellow',
      color: 'blue',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Inventory</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="left">Product Id</TableCell>
                <TableCell align="left">Weight / Size</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.cname}
                  </TableCell>
                  {/* cname, pname, pid, size, cost, status */}
                  <TableCell align="left">{row.pname}</TableCell>
                  <TableCell align="left">{row.pid}</TableCell>
                  <TableCell align="left">{row.size}</TableCell>
                  <TableCell align="left">{row.cost}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}