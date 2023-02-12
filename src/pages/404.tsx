import ErrorPage from '@/components/ErrorPage'
interface IProps {

}
const Error = (props: IProps) => {
    console.log("🚀 ~ props", props)
    return (
        <ErrorPage></ErrorPage>
    )
}

export default Error

export async function getStaticProps() {
    const res = await new Promise((resolve, reject) => {
        return resolve("ErrorPage")
    }
    )
    console.log("🚀 ~ res", res)
    return {
        props: {
            res
        }
    }
}
export const config = {
    runtime: 'experimental-edge',
}