import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

export default function TableRowComponent({
   children,
   value,
   unit,
}: {
   children: React.ReactNode
   unit?: string
   value?: string | number
}) {
   return (
      <TableRow hover>
         <TableCell component='th' scope='row'>
            <Typography variant='body1'>{children}</Typography>
         </TableCell>
         <TableCell component='th' scope='row'>
            {value} {unit}
         </TableCell>
      </TableRow>
   )
}
