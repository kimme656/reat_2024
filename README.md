##깃허브에 처음 데이터를 올리는 명령어

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/kimme656/himedia.git
git push -u origin main


  const  [show,setShow]=useState(false);
  //usestate: 함수형 컴포넌트에서도 상태(state) 관리를 할 수 있게 해주는 Hook
  //const [변수명, 상태를 업데이트 할 함수명] = usestate(초기값)
            show, setshow

  //useEffect : 컴포넌틑가 렌더링 될 때마다 어떠한 작업을 수행하도록 해야 한다면,
  그것을 설정하는 Hook으로 사용

  
// import React, { useState } from 'react'

<!-- // const Footer = () => {
//   const [count,setcount] = useState(10)
//   return(
//     <div>
//       <p>you clicked {count } times </p>
//       <button onClick={()=>(setcount(count+1))}>click me +</button>
//       <button onClick={()=>(setcount(count-1))}>click me -</button>
//     </div>
//   )
// }

// export default Footer -->