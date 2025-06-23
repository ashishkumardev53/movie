import loader from '/cube.gif'

function Loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center overflow-hidden bg-black'>
        <img src={loader} alt="" />
    </div>
  )
}

export default Loading