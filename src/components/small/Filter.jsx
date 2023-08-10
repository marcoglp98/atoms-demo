const Filter = (props) => {
return <div className={`${props.color} h-max w-max text-center border-2 border-stone-700 rounded ml-3 mr-4 mt-4`}>
    <p className="p-1 font-semibold">{props.name}</p>
</div>
}

export default Filter;