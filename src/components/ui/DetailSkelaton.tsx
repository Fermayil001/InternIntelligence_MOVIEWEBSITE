import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DetailSkelaton = () => {
  return (
    <div className=" bg-gray-800 w-full h-screen pt-10">
      <div className=" w-[80%] bg--500 mx-auto">
        <div className="flex gap-x-10">
          <div className="w-1/3">
            <Skeleton width={300} height={400} />
          </div>
          <div className="flex flex-col justify-center w-full">
            <Skeleton width={'80%'} height={30}  count={6} style={{ marginBottom: '.6rem'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailSkelaton