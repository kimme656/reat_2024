import React from 'react'
import about from '../assets/img/about.jpg'

const introTExt ={
  title:"김미나 웹 ,앱퍼블리셔",
  desc:["talent is","found at the end of the","effort"]
}

const Intro = () => {
  return (
    <section id='intro'>
        <div className="intro_inner">
        <h1 className='intro_title'>{introTExt.desc}</h1>
          <div className="intro_lines" aria-hidden="true">
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </div>

            <div className="intro_txt">
                <div className="txt">
                    <div>{introTExt.desc[0]}</div>
                    <div>{introTExt.desc[1]}</div>
                    <div>{introTExt.desc[2]}</div>
                </div>
                <div className="img">
                    <img src="https://github.com/kimme656/port_img_1/blob/main/about.jpg?raw=true" alt="멍청한 수" />
                </div>
            </div>


          <div className="intro_lines bottom" aria-hidden="true">
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </div>
        </div>
    </section>
  )
} 

export default Intro