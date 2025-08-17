import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DetailSkelaton = () => {
  return (
    <div className="bg-gray-800 w-full min-h-screen pt-6 px-2 sm:px-4">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="w-full md:w-1/3 flex-shrink-0 mb-4 md:mb-0 flex justify-center">
            <Skeleton width={220} height={320} className="rounded-lg" />
          </div>
          <div className="flex flex-col justify-center w-full md:w-2/3 gap-2">
            <Skeleton width={'80%'} height={30} count={6} className='mb-2.5' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailSkelaton