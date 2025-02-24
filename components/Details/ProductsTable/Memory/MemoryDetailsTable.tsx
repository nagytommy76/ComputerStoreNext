import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableRowComponent from '../TableRow'
import type { MemoryDetails } from '@/models/Memory/memoryTypes'

export default function MemoryDetailsTable({ memoryDetails }: { memoryDetails: MemoryDetails }) {
   return (
      <TableContainer component={Paper} sx={{ maxHeight: '1000px' }}>
         <Table sx={{ minWidth: 0 }} aria-label='Vga details table'>
            <TableBody>
               <TableRowComponent value={memoryDetails.warranity} unit='Hónap'>
                  Garancia:
               </TableRowComponent>
               <TableRowComponent value={memoryDetails.capacity} unit='GB'>
                  Kapacitás:
               </TableRowComponent>
               <TableRowComponent value={memoryDetails.memoryType}>Memória típusa:</TableRowComponent>
               <TableRowComponent value={memoryDetails.frequency} unit='MHz'>
                  Frekvencia:
               </TableRowComponent>
               <TableRowComponent value={memoryDetails.latency} unit='CL'>
                  Késleltetés:
               </TableRowComponent>
               <TableRowComponent value={memoryDetails.moduleNumber} unit='DB'>
                  Modulok száma:
               </TableRowComponent>
               <TableRowComponent value={memoryDetails.voltage} unit='V'>
                  Feszültség:
               </TableRowComponent>
            </TableBody>
         </Table>
      </TableContainer>
   )
}
