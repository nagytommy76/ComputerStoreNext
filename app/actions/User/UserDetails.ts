export function extractFormData(formData: FormData) {
   return {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      phone: formData.get('phone') as string,
      zipCode: formData.get('zipCode') as string,
      city: formData.get('city') as string,
      street: formData.get('street') as string,
      houseNumber: formData.get('houseNumber') as string,
      floor: formData.get('floor') as string,
      door: formData.get('door') as string,
   }
}
