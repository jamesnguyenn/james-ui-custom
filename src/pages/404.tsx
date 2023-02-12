import ErrorPage from '@/components/ErrorPage'

const Error = () => {
    return (
        <ErrorPage></ErrorPage>
    )
}

export default Error

export async function getStaticProps() {

    return {
        props: {}
    }
}
export const config = {
    runtime: 'experimental-edge',
}