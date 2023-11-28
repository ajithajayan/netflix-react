import React,{useState,useEffect} from 'react'
import Card from './card'
import { HorrorMovies,ComedyMovies,originals,trending,ActionMovies,RomanceMovies,Documentaries } from '../constants/urls'


function mainSection() {
  return (
    <section className="main-container" >
            
      <Card url={originals} title="Orginals"/> 
      <Card url={trending} title="Trending Movies"/> 
      <Card url={ActionMovies} title="Action-Movies"/> 
      <Card url={ComedyMovies} title="Comedy"/> 

 
    <section class="link">
      <div class="logos">
        <a href="#"><i class="fab fa-facebook-square fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-instagram fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-twitter fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-youtube fa-2x logo"></i></a>
      </div>
      <div class="sub-links">
        <ul>
          <li><a href="#">Audio and Subtitles</a></li>
          <li><a href="#">Audio Description</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </section>
</section>




  )
}

export default mainSection