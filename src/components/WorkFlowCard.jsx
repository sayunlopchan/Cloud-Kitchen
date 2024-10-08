// ReusableCard.js

const WorkFlowCard = ({ image, title, description }) => {
  return (
    <div className='relative w-[240px] h-[165px] md:w-[215px] md:h-[160px] lg:w-[240px] lg:h-[165px] border-colorRed bg-white border-2 rounded-[60px]'>
      <div className='flex justify-center h-[55px]'>
        <div className='absolute -top-16 size-[120px] bg-gray-400 rounded-full overflow-hidden'>
          <img src={image} alt={title} className='object-cover object-left size-full' />
        </div>
      </div>
      <div className='text-center'>
        <h2 className='text-colorRed font-semibold text-lg'>{title}</h2>
        <p className='text-sm text-secendaryText'>{description}</p>
      </div>
    </div>
  );
};

export default WorkFlowCard;
