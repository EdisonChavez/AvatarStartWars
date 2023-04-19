import {Inter} from 'next/font/google'
import MainApp from "../../components/MainApp";

const inter = Inter({subsets: ['latin']})
import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <MainApp></MainApp>
    )

}


