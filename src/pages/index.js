import React, { useEffect, useState, memo } from "react"
import ListItem from "../components/hospital-item"
import { Link } from "gatsby"
import { cities } from "../lib/cities"
import DropDown from "../components/dropdown"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [hospitals, setHospitals] = useState([])
  const [city, setCity] = useState("台北市")
  const [area, setArea] = useState("中正區")

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"
    )
      .then(data => data.json())
      .then(data => {
        setHospitals(data.features.map(hospital => hospital))
      })
  }, [0])

  const matchedHospitals = hospitals.filter(hospital => {
    return hospital.properties.address.indexOf(city + area) !== -1
  })

  const handleCityChange = city => {
    setCity(city)
    setArea(cities[city][0])
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div class="container">
        <DropDown current={city} onChange={handleCityChange} values={Object.keys(cities)} />
        <DropDown current={area} onChange={setArea} values={cities[city]} />
        {matchedHospitals.map((hospital, index) => (
          <ListItem
            key={index}
            properties={hospital.properties}
            coordinates={hospital.geometry.coordinates}
          />
        ))}
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
