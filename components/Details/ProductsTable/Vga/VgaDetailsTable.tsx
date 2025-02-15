import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'

import TableRowComponent from '../TableRow'

import type { VgaDetailsType } from '@/models/Vga/vgaTypes'

export default function VgaDetailsTable({ vgaDetails }: { vgaDetails: VgaDetailsType }) {
   return (
      <TableContainer component={Paper} sx={{ maxHeight: '1000px' }}>
         <Table sx={{ minWidth: 0 }} aria-label='Vga details table'>
            <TableBody>
               <TableRowComponent value={vgaDetails.warranity} unit='hónap'>
                  Garancia:
               </TableRowComponent>
               <TableRowComponent value={vgaDetails.gpuManufacturer}>Chipset gyártó:</TableRowComponent>
               <TableRowComponent value={vgaDetails.gpuBaseClock} unit='MHz'>
                  Alap órajel:
               </TableRowComponent>
               <TableRowComponent value={vgaDetails.gpuPeakClock} unit='MHz'>
                  Emelt órajel:
               </TableRowComponent>
               <TableRowComponent value={vgaDetails.vramCapacity} unit='GB'>
                  Memória kapacitás:
               </TableRowComponent>
               <TableRowComponent value={vgaDetails.vramSpeed} unit='GHz'>
                  Memória sebesség:
               </TableRowComponent>
               <TableRowComponent value={vgaDetails.vramType}>Memória Típusa:</TableRowComponent>
               <TableRowComponent value={vgaDetails.vramBandwidth} unit='bit'>
                  Memória sávszélesség:
               </TableRowComponent>
               <TableRowComponent value={vgaDetails.minPowerSupply} unit='Watt'>
                  Átlagos fogyasztás:
               </TableRowComponent>
               <TableRowComponent value={vgaDetails.powerPin}>Tápcsatlakozók:</TableRowComponent>
               <TableRowComponent value={vgaDetails.length} unit='mm'>
                  Hosszúság:
               </TableRowComponent>
               <TableRowComponent value={vgaDetails.pcieType}>PCI-E foglalat:</TableRowComponent>
               <TableRowComponent value={vgaDetails.streamProcessors} unit='darab'>
                  Stream processzorok:
               </TableRowComponent>
               <TableRowComponent value={vgaDetails.HDMI} unit='darab'>
                  HDMI:
               </TableRowComponent>
               <TableRowComponent value={vgaDetails.displayPort} unit='darab'>
                  DisplayPort:
               </TableRowComponent>
               <TableRowComponent value={vgaDetails.DVI} unit='darab'>
                  DVI:
               </TableRowComponent>
            </TableBody>
         </Table>
      </TableContainer>
   )
}
