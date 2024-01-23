import React from 'react'
const siteText = [
  {
    Text : ["make","site compliant with","webstandard"],
    title : "웹 표준을 준수한 사이트 제작",
    site : "https://github.com/kimme656/reat_2024/settings/pages",
    info : ["site code","production period : two days","use stack : html5/css3 javascript..."]
  },
  {
    Text : ["make","site compliant with","webstandard"],
    title : "2웹 페이지 디자인",
    site : "https://github.com/kimme656/reat_2024/settings/pages",
    info : ["site code","production period : two days","use stack : html5/css3 javascript..."]
  },
  {
    Text : ["make","site compliant with","webstandard"],
    title : "3.웹페이지 디자인",
    site : "https://github.com/kimme656/reat_2024/settings/pages",
    info : ["site code","production period : two days","use stack : html5/css3 javascript..."]
  },
  {
    Text : ["make","site compliant with","webstandard"],
    title : "4.웹페이지 디자인",
    site : "https://github.com/kimme656/reat_2024/settings/pages",
    info : ["site code","production period : two days","use stack : html5/css3 javascript..."]
  }
]

const Site = () => {
  return (
    <section id='site'>
      <div className="site_inner">
        <div className="site_title">
          Site coding <em>작품들</em>
        </div>
        <div className="site_wrap">
          {siteText.map((site,key)=>(
            <article className={`site_item s${key+1}`} key={key}>
              <span className='num'>0{key + 1}. </span>
              <div className="text">
                <div>{site.Text[0]}</div>
                <div>{site.Text[1]}</div>
                <div>{site.Text[2]}</div>
              </div>
              <div className="title">{site.title}</div>
              <div className="btn">
                <a href={site.site}>code</a>
                <a href={site.site}>view</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
         

        </div>
      </div>
    </section>
  )
}

export default Site