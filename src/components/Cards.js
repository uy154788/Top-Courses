import React, { useState } from 'react'
import Card from './Card';

const Cards=(props)=> {
    let courses=props.courses;
    let category=props.category;
    const [linkedCourses,setLikedCourses]=useState([]);
    //it returns all courses of  api iin an array format
    function getCoursees(){
        if(category==="All"){
            let allCourses=[];
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }else{
            return courses[category];
        }
    }
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                
                courses.length!==0 ?(
                    getCoursees().map((course)=>{
                        return <Card key={course.id} course={course} likedCourses={linkedCourses} setLikedCourses={setLikedCourses}/>
                    })

                ):
                (
                    <div>
                        
                        <img src="/not-found.png" alt="Not Found" id='not-found' className='w-[400px] sm:w-[500px]' />

                        <p className=' font-medium text-white text-2xl text-center'>Data not found</p>
                    </div>
                )
               
            }
            
        </div>
    );
}

export default Cards