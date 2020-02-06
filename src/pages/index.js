import React, { useEffect, useState } from "react"
import ListItem from "../components/hospital-item"
import ListItemLabel from "../components/list-item-label"
import { cities } from "../lib/cities"
import DropDown from "../components/dropdown"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const SORT_BY_ADULT = "成人"
const SORT_BY_CHILD = "兒童"
const SORT_BY_TOTAL = "總數"
const SORT_ARRAY = [SORT_BY_ADULT, SORT_BY_CHILD, SORT_BY_TOTAL]

const IndexPage = () => {
  const [hospitals, setHospitals] = useState([])
  const [city, setCity] = useState("台北市")
  const [area, setArea] = useState("中正區")
  const [sortBy, setSort] = useState(SORT_BY_CHILD)
  const [times, setTimes] = useState(0)

  const sortFn = (a, b) => {
    if (sortBy === SORT_BY_ADULT) {
      return a.properties.mask_adult > b.properties.mask_adult ? -1 : 1
    } else if (sortBy === SORT_BY_CHILD) {
      return a.properties.mask_child > b.properties.mask_child ? -1 : 1
    } else if (sortBy === SORT_BY_TOTAL) {
      return a.properties.mask_adult + a.properties.mask_child >
        b.properties.mask_adult + b.properties.mask_child
        ? -1
        : 1
    }
  }

  useEffect(() => {
    console.log("fetch")
    fetch(
      "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"
    )
      .then(data => data.json())
      .then(data => {
        setHospitals(data.features.map(hospital => hospital))
      })
  }, [times])

  setTimeout(() => {
    setTimes(times + 1)
  }, 2000 * 60 * 2)

  const matchedHospitals = hospitals
    .filter(hospital => {
      return hospital.properties.address.indexOf(city + area) !== -1
    })
    .sort(sortFn)

  const handleCityChange = city => {
    setCity(city)
    setArea(cities[city][0])
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div>點擊尋找到你/妳的口罩！</div>
        <DropDown
          current={city}
          onChange={handleCityChange}
          values={Object.keys(cities)}
        />
        <DropDown current={area} onChange={setArea} values={cities[city]} />

        <DropDown current={sortBy} onChange={setSort} values={SORT_ARRAY} />

        <ListItemLabel />
        {matchedHospitals.map((hospital, index) => (
          <ListItem
            key={index}
            properties={hospital.properties}
            coordinates={hospital.geometry.coordinates}
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
