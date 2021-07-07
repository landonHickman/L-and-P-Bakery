import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Container, Image, Nav, Col, Row } from 'react-bootstrap'
import '../App.css'

const Footer = () => {
  const [footer, setFooter] = useState([])
  const [navbar, setNavbar] = useState([])


  useEffect(()=>{
    axiosCalls()
  },[])

  const axiosCalls = async () => {
    try{
      let res = await axios.get('/api/footers')
      console.log('footer',res.data)
      setFooter(res.data)
      let res1 = await axios.get('/api/navbars')
      console.log('navbars',res1.data)
      setNavbar(res1.data)
    }catch(err){
      alert('err')
      console.log(err)
      console.log(err.response)
    }
  }

  const renderAddress = () => {
    return footer.map(f=> {
      return(
      <div key={f.id}>
        <h5>{f.city},{f.state}</h5>
        <p>{f.phone_number}</p>
        <p>{f.email}</p>
        <p>{f.address} {f.city},</p>
        <p>{f.state} {f.zip}</p>
        
      </div>
      )
    })
  }

  const renderNav = () => {
    return navbar.map(n=> {
      return(

        <div key={n.id} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Nav.Link style={{color: 'black', textAlign: 'center'}} href='/menu'>{n.nav_text_1}</Nav.Link>
          <Nav.Link style={{color: 'black', textAlign: 'center'}} href='/about_pages'>{n.nav_text_2}</Nav.Link>
          <Nav.Link style={{color: 'black', textAlign: 'center'}} href='/custom_cakes'>{n.nav_text_3}</Nav.Link>
      </div>
      )
    })
  }

  const renderSocialLinks = () => {
    return footer.map(f => {
      return (
        <>
        <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Col md={{span: 5, offset: 4}}>
          <p style={{textAlign: 'center', margin: '0'}}>©2021 DevPoint Studios All rights reserved</p>
        </Col>
        <Col md={3} className="order" style={{display: 'flex', justifyContent: 'center', order: '1'}}>
          <Nav.Link href={f.social_media_url_1}><Image style={{ height: "25px" }} src={f.social_media_logo_1} rounded /></Nav.Link>
          <Nav.Link href={f.social_media_url_2}><Image style={{ height: "25px" }} src={f.social_media_logo_2} rounded /></Nav.Link>
          <Nav.Link href={f.social_media_url_3}><Image style={{ height: "25px" }} src={f.social_media_logo_3} rounded /></Nav.Link>
        </Col>
        </Row>
        </>
      )
    })
  }

  return (
      <Container style={{border: '1px solid black'}}>
        <Row>
          <Col md={6}>
            {renderAddress()}
          </Col>
          <Col md={{span: 3, offset: 3}} style={{display: 'flex'}} >
            {renderNav()}
          </Col>
        </Row>
        <div>
          {renderSocialLinks()}
        </div>
      </Container>
  )
}
export default Footer