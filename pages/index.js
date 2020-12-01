import Layout from '../components/layout';

const Index = (props) => (
    <Layout>
        <h1>home page</h1>
        {
            props.characters.map(character => {
                return (
                    <div>
                        <h1>{character.name}</h1>
                    </div>
                )
            })
        }
    </Layout>
)
Index.getInitialProps = async (props) => {
    const response = await fetch("https://rickandmortyapi.com/api/character")

    const data = await response.json()

    return {
        characters: data.results
    }
}
export default Index;