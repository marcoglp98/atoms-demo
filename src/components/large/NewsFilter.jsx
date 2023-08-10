import Filter from "../small/Filter";

const NewsFilter = () =>{
    return <div className="ml-5 mt-8 flex flex-row justify-between">
<div >
<h1 className="text-5xl font-bold">Tutti i temi</h1>    
</div>
    <div className="flex flex-row">
    <Filter color="bg-green-100" name="AMBIENTE"></Filter>
    <Filter color="bg-white" name="ECONOMIA"></Filter>
    <Filter color="bg-red-100" name="MONDO"></Filter>
    <Filter color="bg-white" name="NON PROFIT"></Filter>
    <Filter color="bg-green-100" name="POLITICA"></Filter>
    <Filter color="bg-white" name="WELFARE"></Filter>
    <Filter color="bg-white" name="SOCIETÀ"></Filter>
    </div>
    </div>
}

export default NewsFilter;