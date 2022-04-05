import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../../styles/Primary.css"
import axios from 'axios';

function Facilities({facdongdata}) {
    const[dongData, setDongData] = useState({});

    useEffect(() => {
        if(facdongdata){
            setDongData(facdongdata)
        }
    },[facdongdata])

    return (
        <div>
            <h2 className='infoTable'>편의 시설</h2>
            <TableContainer className='infoTable' component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>병원 수</TableCell>
                        <TableCell align="right">약국 수</TableCell>
                        <TableCell align="right">은행 수</TableCell>
                        <TableCell align="right">슈퍼마켓 수</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {dongData.hospitalNumber}개
                            </TableCell>
                            <TableCell align="right">{dongData.pharmacyNumber}개</TableCell>
                            <TableCell align="right">{dongData.bankNumber}개</TableCell>
                            <TableCell align="right">{dongData.supermarketNumber}개</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <h2 className='infoTable'>교육 시설</h2>
            <TableContainer className='infoTable' component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>유치원 수</TableCell>
                        <TableCell align="right">학교 수(초중고)</TableCell>
                        <TableCell align="right">대학교 수</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {dongData.kindergardenNumber}개
                            </TableCell>
                            <TableCell align="right">{dongData.schoolNumber}개</TableCell>
                            <TableCell align="right">{dongData.universityNumber}개</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <h2 className='infoTable'>교통 시설</h2>
            <TableContainer className='infoTable' component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>버스터미널 수</TableCell>
                        <TableCell align="right">지하철역 수</TableCell>
                        <TableCell align="right">버스정거장 수</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {dongData.busTerminalNumber}개
                            </TableCell>
                            <TableCell align="right">{dongData.subwayNumber}개</TableCell>
                            <TableCell align="right">{dongData.busStopNumber}개</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <h2 className='infoTable'>기타 시설</h2>
            <TableContainer className='infoTable' component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>백화점 수</TableCell>
                        <TableCell align="right">극장 수</TableCell>
                        <TableCell align="right">숙박시설 수</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {dongData.departmentStoreNumber}개
                            </TableCell>
                            <TableCell align="right">{dongData.theaterNumber}개</TableCell>
                            <TableCell align="right">{dongData.hotelNumber}개</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Facilities;