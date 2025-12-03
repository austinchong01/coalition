
const Patient = ({name, age, gender, picture}) => {

    return (
    <div className="flex items-center justify-between pr-5">
        <div className="flex items-center gap-3">
            <img className="w-12 h-12" src={picture} alt="pfp" />
            <div className="flex flex-col">
                <div className="body-emphasized-14pt">{name}</div>
                <div className="body-secondary-info-14pt">{gender}, {age}</div>
            </div>
        </div>
        <img className="w-[18px]" src="/images/more_hor.svg" alt="more" />
    </div>);
};

export default Patient;