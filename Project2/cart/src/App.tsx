import React,{useState, useEffect} from 'react';
import './App.css';
import List from './components/ListHooks'
import Footer from './components/Footer'

interface ItemType {
  readonly id: number,
  name: string,
  list_pic_url: string,
  retail_price: number,
  num: number
}
interface StateType{
  list: ItemType[],
  totalPrice?: number,
  totalNum?: number
}

const App: React.FC = ()=>{
  // 声明list
  let [list, setList] = useState<ItemType[]>([]);

  // 声明总价
  let [totalPrice, setTotalPrice] = useState<number>(0);

  // 声明总数
  let [totalNum, setTotalNum] = useState<number>(0);

  useEffect(()=>{
    fetch('http://easymarket.jasonandjay.com/goods/list')
    .then(res=>res.json())
    .then(data=>{
      console.log('data...', data, data.data.data);
      setList(
        data.data.data.map((item:object)=>{return {...item, num:0}}) as ItemType[]
      )
    })
  }, []);

  useEffect(()=>{
    setTotalPrice(list.reduce((prev, item:ItemType)=>{
      return prev += item.retail_price*item.num;
    }, 0))
    setTotalNum(list.reduce((prev, item:ItemType)=>{
      return prev += item.num;
    }, 0))
  }, [list])

  let numChange = (id:number, type:string)=>{
    let newList:ItemType[] = [...list];
    let index = newList.findIndex((item:any)=>item.id===id);
    type=='+'?newList[index].num++: newList[index].num--;
    if (newList[index].num < 0){
      newList[index].num = 0;
    }
    setList(newList);
  }

  return <>
    <List list={list} numChange={numChange}/>
    <Footer totalPrice={totalPrice} totalNum={totalNum}/>
  </>;
}

// class App extends React.Component<{}, StateType>{

//   state = {
//     list: []
//   }

  // componentDidMount(){
  //   fetch('http://easymarket.jasonandjay.com/goods/list')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log('data...', data, data.data.data);
  //     this.setState({
  //       list: data.data.data.map((item:object)=>{return {...item, num:0}}) as ItemType[]
  //     })
  //   })
  // }

//   numChange = (id:number, type:string)=>{
//     let list:ItemType[] = [...this.state.list];
//     let index = list.findIndex((item:any)=>item.id===id);
//     type=='+'?list[index].num++: list[index].num--;
//     if (list[index].num < 0){
//       list[index].num = 0;
//     }
//     this.setState({
//       list
//     })
//   }

  // get totalPrice(){
  //   return this.state.list.reduce((prev, item:ItemType)=>{
  //     return prev += item.retail_price*item.num;
  //   }, 0)
  // }

  // get totalNum(){
  //   return this.state.list.reduce((prev, item:ItemType)=>{
  //     return prev += item.num;
  //   }, 0)
  // }

//   render(){
//     let {list} = this.state;
//     return <>
//       <List list={list} numChange={this.numChange}/>
//       <Footer totalPrice={this.totalPrice} totalNum={this.totalNum}/>
//     </>;
//   }
// }

export default App;