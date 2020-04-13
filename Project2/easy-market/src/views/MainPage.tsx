import React, {useState, useEffect, memo, useMemo, useCallback} from 'react'
import RouterView from '../router/RouterView'
import { PropType, RouterItemType } from '../utils/interface'
import Footer from '../components/Footer'

// memo包裹组件
let WrapFooter = memo(Footer);
let MainPage: React.FC<PropType> = props=>{

    let [count, setCount] = useState<number>(100);
    let [flag, setFlag] = useState<boolean>(false);

    let [arr, setArr] = useState<Array<never>>([]);

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setCount(count=>count+1)
    //     }, 1000);
    // }, []);

    console.log('count...', count);

    let changeFooter = ()=>{

    }

    return <>
        <div>
            <RouterView routes={props.routes}/>
        </div>

        {/* <WrapFooter footers={useMemo(()=>arr, [arr])}/> */}
        
        <WrapFooter footers={arr} cb={useCallback(()=>changeFooter(), [])}/>
    </>
}

export default MainPage;