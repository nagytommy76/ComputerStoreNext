import Pagination from '@mui/material/Pagination'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks'
import { setPage } from '@/reduxStore/slices/Filter/BaseFilterDataSlice'

export default function PaginationComponent() {
   const dispatch = useAppDispatch()
   const { page, perPage, totalProducts } = useAppSelector((state) => state.filter)

   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      dispatch(setPage(value - 1))
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }

   return (
      <div style={{ alignSelf: 'center', margin: '1.5rem 0' }}>
         <Pagination
            count={Math.ceil(totalProducts / perPage)}
            page={page + 1}
            onChange={handleChange}
            color='primary'
            variant='text'
            shape='rounded'
         />
      </div>
   )
}
