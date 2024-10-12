// import BaseSideFilter from '@/components/Shop/BaseSideFilter'

export default function ShopLayout({
   children, // will be a page or nested layout
}: {
   children: React.ReactNode
}) {
   return (
      <section
         style={{
            width: '100%',
            minHeight: '100vh',
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
         }}
      >
         {/* <BaseSideFilter /> */}
         {/* Include shared UI here e.g. a header or sidebar */}
         {children}
      </section>
   )
}
