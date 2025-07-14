const Title = ({title,subTitle}) => {
  return (
    <>
      <h1 className='font-medium text-xl md:text-3xl '>{title}</h1>
       <p className='text-sm md:text-base text-gray-500 mt-2'>{subTitle} </p>   
    </>
  )
}

export default Title
