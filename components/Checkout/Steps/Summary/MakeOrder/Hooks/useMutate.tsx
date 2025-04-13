import { useMutation } from '@tanstack/react-query'

async function mutationFn() {
   return fetch(`/api/order/make-order`, { method: 'GET' })
}

export default function useMutate() {
   const mutation = useMutation({
      mutationFn,
   })
   return mutation
}
