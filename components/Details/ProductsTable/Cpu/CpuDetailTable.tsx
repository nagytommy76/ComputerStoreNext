import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'

import { CpuDetailsType } from '@Models/Cpu/cpuTypes'

import TableRow from '../TableRow'

const CpuDetailTable = ({ details }: { details: CpuDetailsType }) => {
   return (
      <TableContainer component={Paper} sx={{ maxHeight: '1000px' }}>
         <Table sx={{ minWidth: 0 }} aria-label='Vga details table'>
            <TableBody>
               <TableRow value={details.warranity} unit='Hónap'>
                  Garancia:
               </TableRow>
               <TableRow value={details.coreCount} unit='mag'>
                  Magok:
               </TableRow>
               <TableRow value={details.threadCount} unit='szál'>
                  Szálak:
               </TableRow>
               <TableRow value={details.baseClock} unit='MHz'>
                  Alap órajel:
               </TableRow>
               <TableRow value={details.boostClock} unit='MHz'>
                  Turbó órajel:
               </TableRow>
               <TableRow value={details.TDP} unit='Watt'>
                  TDP:
               </TableRow>
               <TableRow value={details.l2Cache} unit='Mb'>
                  L2 Cache:
               </TableRow>
               <TableRow value={details.l3Cache} unit='Mb'>
                  L3 Cache:
               </TableRow>
               <TableRow value={details.socket}>Foglalat:</TableRow>
               <TableRow value={details.architecture}>Architektúra:</TableRow>
               <TableRow value={details.cpuCodeName}>CPU kódneve:</TableRow>
               <TableRow value={details.stockCoolerName}>Hűtő:</TableRow>
               <TableRow value={details.integratedGraphicsName}>Grafikus vezérlő:</TableRow>
            </TableBody>
         </Table>
      </TableContainer>
   )
}

export default CpuDetailTable
