import React from 'react'

const PaymentFeatures = () => {
  return (
    <div className='border dark:border-gray-900 rounded-lg px-4 py-6 mb-4 relative'>
        {/* DEVOLUCIONES */}
        <h3 className='text-lg my-2'>Devolución gratis</h3>
        <p className='font-light text-sm text-gray-500 dark:text-gray-300 my-6'>Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!</p>
        <a href='#' className='text-sm text-blue-500'>Conocer más sobre devoluciones</a>
        
        <hr  className='my-6 dark:border-gray-900'/>

        {/* GARANTIA */}

        <h3 className='text-lg my-2'>Garantía</h3>
        <h4 className='text-md mt-6'>Compra Protegida con Mercado Pago</h4>
        <p className='font-light text-sm text-gray-500 dark:text-gray-300 my-2'>Recibí el producto que esperabas o te devolvemos tu dinero</p>

        <h4 className='text-md mt-6'>Garantía del vendedor</h4>
        <p className='font-light text-sm text-gray-500 dark:text-gray-300 mt-4 mb-6'>Garantía del vendedor: 1 meses</p>

        <a href='#' className='text-sm text-blue-500'>Conocer más sobre devoluciones</a>
        
        <hr  className='my-6 dark:border-gray-900'/>

        {/* MEDIOS DE PAGO */}
        <h3 className='text-lg my-2'>Medios de pago</h3>
        <h4 className='text-md my-2'>Hasta 12 cuotas sin tarjeta</h4>

        <img src='https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg' alt='mercado credito' />

        <h4 className='text-md mt-6'>Tarjetas de crédito</h4>
        <p className='font-light text-sm text-gray-500 dark:text-gray-300 mb-2'>¡Cuotas sin interés con bancos seleccionados!</p>

        <div className='flex w-full gap-6'>
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg' />
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg' />
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg' />
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg' />
        </div>

        <h4 className='text-md mt-6 mb-2'>Tarjetas de débito</h4>
        <div className='flex w-full gap-6'>
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg' />
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg' />
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg' />
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg' />
        </div>

        <h4 className='text-md mt-6 mb-2'>Efectivo</h4>
        <div className='flex w-full gap-6'>
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg' />
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg' />
        </div>

        <div className='mt-6'>
            <a href='#' className='text-sm text-blue-500'>Conocé otros medios de pago</a>
        </div>
    </div>
  )
}

export default PaymentFeatures