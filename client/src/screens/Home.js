import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

export default function Home() {

const [usefooData,setfoodData] = useState([])
const [useCategory,setCategory] = useState([])

const loadData = async ()=>{

  const response = await fetch("http://localhost:2000/",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    }
  }) 
  const json =await response.json()

setCategory(json[0].Category)
setfoodData(json[0].foodDatas)
} 

useEffect(()=>{
  loadData()
})



  return (
    <> 
     <Navbar/>
     <div className='bg-dark'>
      <Carousel/>
      <div className='container text-light'>
        {useCategory !== []? useCategory.map((cat)=>{
          return(
            <div className='row'>
            <div key={cat._id} className='my-5'>
              <div className='fs-2 mx-5'>{cat.CategoryName}</div>
              <hr />
              </div>
              {usefooData!==[]? usefooData.filter((data)=> data.CategoryName===cat.CategoryName).map(food =>{
                return(
               
                  <div key={food._id} className='mx-5 col-12 col-md-6 col-lg-3 col-xl-2'>
                    <Card name={food.name} img={food.img} desc={food.description} option={food.options[0]} />
                  </div>
              
                  )
                }):""}
            </div>
          )
        }):""}
      </div>
     </div>
     <Footer/>
    </>
  )
}
