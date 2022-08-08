import { ads } from "../../data/db"
import { BsFillLightningFill } from "react-icons/bs"

const Ads = () => {
  return (
    <div className='border dark:border-gray-900 rounded-lg px-4 py-6 mb-4'>
        <h3 className='text-lg my-2'>Productos promocionados <span className='text-sm text-blue-500 ml-1'>Anunciá aquí</span></h3>

        {
            ads.map(ad => (
                <a 
                    href={ad.url}
                    target='_blank'
                    key={ad.id} 
                    className='flex my-4 cursor-pointer'>
                    <img src={ad.img} alt={ad.description} className='w-1/4 border-2 border-gray-100 mr-2' />
                    <div>
                        <h4 className='text-xl'>{ad.price}</h4>
                        <p className="flex text-sm items-center text-green-600 font-bold gap-1">{ ad.ship && ad.ship }
                            <span className="italic flex text-xs font-black">{ ad.full && ( 
                                <><BsFillLightningFill />FULL</>
                            ) }</span>
                        </p>
                        <p className='font-light text-sm text-gray-500 dark:text-gray-300'>{ad.description}</p>
                    </div>
                </a>
            ))
        }
    </div>
  )
}

export default Ads
