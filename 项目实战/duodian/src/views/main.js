import React from 'react'
import RouterView from '../router/RouterView'
import Footer from '../components/footer'

class Main extends React.Component{
    render(){
        return <>
            <RouterView routes={this.props.routes}></RouterView>
            <Footer/>
        </>
    }
}

export default Main;