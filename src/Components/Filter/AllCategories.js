import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="center">
            <h1>What kind of food would you like?</h1>
            {
                ["SEAFOOD", "ITALIAN", "APPETIZERS", "SALADS", "ALL"]
                .map(category => <Filter key={category} category={category}/>)
            }
        </div>
    )
}

export default AllCategories;