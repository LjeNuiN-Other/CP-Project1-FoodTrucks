import './App.css'
import Truck from './components/Truck'
function App() {

  return (
    <>
    <h1 className="page-tittle"> Food Truck Favorites</h1>
    <div className="trucks-container"> 

    <Truck name="Birria-Landia" type="Mexican" menu="https://thebirrialandia.com/menu/" url="https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"/>

    <Truck name="Mysttik Masala" type="Indian" menu="https://indianfoodny.com/" url="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42"/>

    <Truck name="The halal guys" type="Middle Eastern" menu="https://thehalalguys.com/menu/" url="https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024"/>

    <Truck name="Jerk Pan" type="Jamaican" menu="https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/" url="https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg"/>

    <Truck name="Ny Dosas" type="Vegetarian" menu="https://nydosas.com/menu/" url="https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg"/>

    <Truck name="Tong" type="Bangladeshi" menu="https://www.facebook.com/Bangladeshistreetfoods/" url="https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg"/>

    <Truck name="King Souvlaki of Astoria" type="Greek" menu="https://kingsouvlakinyc.com/" url="https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg"/>

    <Truck name="Ling's Sweet Mini Cakes" type="Chineese" menu="https://canalstreet.market/" url="https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg"/>



    </div>
    </>
  )
}

export default App
