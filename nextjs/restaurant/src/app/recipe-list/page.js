import Link from "next/link";


async function fetchRecipi() {
  try {
    const responseApi = await fetch('https://dummyjson.com/recipes')
    const data = await responseApi.json();
    return data.recipes



  } catch (error) {
    throw new Error(error)

  }
}





async function Recipes() {
  const recipeList = await fetchRecipi();


  return (
    <div>
      <h1>Hey this is recipe list</h1>
      {
        recipeList.map((item) => (

          <div key={item.id}>
            <li>
              <Link href={`/recipe-list/${item.id}`}>
                {item.name}
              </Link>
            </li>

          </div>


        ))
      }

    </div>
  )
}

export default Recipes
