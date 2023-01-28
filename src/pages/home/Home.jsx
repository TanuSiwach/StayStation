import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featured/featuredProperties/featuredProperties"
import "./home.css"
import PropertyList from "../../components/propertyList/PropertyList"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
 
 const home = () => {
   return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Home guests love</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
        </div>
    </div>
   )
 }
 
 export default home