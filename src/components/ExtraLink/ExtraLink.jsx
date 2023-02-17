import rightArrow from '../../assets/icons/rightArrow.png'
import rightArrowWhite from '../../assets/icons/rightArrowWhite.png'

export const ExtraLink = ({text,color}) => {
    return (
        <div className={`flex justify-center items-center gap-5 font-semibold underline ${color}`}>
            <p>{text}</p>
            <img src={color === 'text-white' ? rightArrowWhite : rightArrow} alt="" />
        </div>
    )
}
