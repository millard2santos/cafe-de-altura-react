import { Header } from "../components/Header/Header"
import { NavBar } from "../components/NavBar/NavBar"
import { QaSec } from "../components/QaSec/QaSec"
import { StoreSec } from "../components/StoreSec/StoreSec"
import { ThreeCardsSec } from "../components/ThreeCardsSec/ThreeCardsSec"
import { Location } from "../components/Location/Location"
import { MainForm } from "../components/MainForm/MainForm"
import { Footer } from "../components/Footer/Footer"
import { SubFooter } from "../components/SubFooter/SubFooter"


const MainPage = () => {
    return (
        <>
        <NavBar />
        <Header />
        <ThreeCardsSec />
        <StoreSec />
        <QaSec />
        <Location />
        <MainForm />
        <Footer />
        <SubFooter />
        </>
    )
}

export default MainPage