

async function recepiDetails(currentId){
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentId}`)
    const recipeData = await apiResponse.json();
    return recipeData

}





async function page({params}) {
    const data = await recepiDetails(params.details)

    
  return (
    <>
    <h1>Recipe Detals page</h1>
    <p>{data.id}</p>
    <img src={data.image} /> 

      
    </>
  )
}

export default page
