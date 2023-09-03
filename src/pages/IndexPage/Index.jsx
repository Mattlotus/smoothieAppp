import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Pokedex</h1>
            <a href='/new'>Create a NEW Smoothie</a>
            <p />
            <a href='/addall'>Add All Smoothie</a>
            <p />
            <form action={`/poof?_method=DELETE`} method="POST">
                <input className='deletePoke' type="submit" value="Delete ALL" />
            </form>
            <p />
            {props.ingredients.map((ingredients, i) => {
                const capitalIngredients = ingredients.name.toUpperCase()
                return (
                    <div id='index' key={i}>
                        <a href={`/show/${ingredients.id}`}>
                            {capitalIngredients}
                        </a>
                        {/* "?_method_DELETE" is calling our method override to delete our pokemon.id */}
                        {/* HTML doesn't support a direct method=DELETE request. It only accepts GET and POST  */}
                        <form action={`/delete/${ingredients.id}?_method=DELETE`} method="POST">
                            <input className='deletePoke' type="submit" value="DELETE" />
                        </form>

                        <form action={`/edit/${ingredients.id}`} method="POST">
                            <input className='editPoke' type="submit" value="Update" />
                        </form>
                        <p />
                    </div>
                )
            })}
        </div>
    )
}

export default Index