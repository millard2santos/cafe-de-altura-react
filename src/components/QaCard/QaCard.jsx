import upArrow from '../../assets/icons/upArrow.png'



export const QaCard = ({text0, text1}) => {
    return (
        <div className="qa-div flex flex-col justify-center gap-4 p-6 bg-white rounded-[10px] text-darkGrey w-full">
            <div className="qa-div-click flex justify-between items-center">
                <p className="text-lg font-semibold">{text0}</p>
                <img src={upArrow} alt="" className="" />
            </div>
            <div className="w-full h-px bg-grey opacity-30"></div>
            <p className="text-xs">{text1}</p>
        </div>
    )
}
