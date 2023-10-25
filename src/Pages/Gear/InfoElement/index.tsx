const InfoElement = (props) => {
    return (
        <div className="border bg-white w-32 my-2 mx-5 p-1 rounded-md shadow-md hover:shadow-lg">
            <a href={props.link} className="flex flex-col items-center">
                <img className="p-3 " src={props.img} />
                <p className="text-center font-bold">{props.name}</p>
            </a>
        </div>
    )
}

export default InfoElement;