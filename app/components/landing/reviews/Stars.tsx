const RatingStars = ({ stars }) => {
    const ratingStars = Array.from({ length: stars }, (_, index) => (
        <svg
            key={index}
            type='radio'
            name='rating-1'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill={index < stars ? '#FDCC0D' : 'none'}
            stroke='none'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
        </svg>
    ))

    return <div className='rating flex flex-row'>{ratingStars}</div>
}

export default RatingStars
