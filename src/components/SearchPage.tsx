import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetDrugs, GetDrug, Drug } from '../api/getDrugs'
import { Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react';


function SearchPage() {
    const [rows] = useState(GetDrugs());
    const [selectedRow, setSelectedRow] = useState(GetDrug(0));
  return (
    <section style={{ minWidth: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <TableContainer component={Paper} sx={{ flex: 10, maxHeight: '900px' ,marginRight: '20px', overflowY: 'auto' }}>
            <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                {rows.length > 0 && Object.keys(rows[0]).map((key) => (
                    <TableCell align="center">
                        {key}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    data-key={row.id}
                    onClick={() => {
                        setSelectedRow(GetDrug(row.id));
                    }}
                >
                    {Object.keys(row).map((key) => (
                        <TableCell align="center">
                            {row[key as keyof Drug]}
                        </TableCell>
                    ))}
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        <Card style={{ flex: 3, maxHeight: '900px', overflowY:'auto' }}>
            {selectedRow ? (
                <CardContent>
                    <Typography variant="h5" component="div">
                        Selected Drug
                    </Typography>
                    {Object.keys(selectedRow).map((key) => (
                        <Typography variant="body2" component="p">
                            {key}: {selectedRow[key as keyof Drug]}
                        </Typography>
                    ))}
                </CardContent>
            ) : null}
        </Card>

    </section>
  );
}

export default SearchPage;