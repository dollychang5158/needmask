import React, { useEffect, useState } from "react"
import ListItem from "../components/hospital-item"
import ListItemLabel from "../components/list-item-label"
import { cities } from "../lib/cities"
import DropDown from "../components/dropdown"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SORT_BY_TOTAL, SORT_ARRAY, filterHospitals } from "../lib/sort"
import LoadMore from "../components/load-more"

const INIT_MAX_ITEM = 5
const STEP = 5

const IndexPage = () => {
  const [hospitals, setHospitals] = useState([])
  const [city, setCity] = useState("台北市")
  const [area, setArea] = useState("中正區")
  const [street, setStreet] = useState("")
  const [sortBy, setSort] = useState(SORT_BY_TOTAL)
  const [times, setTimes] = useState(0)
  const [maxItem, setMaxItem] = useState(INIT_MAX_ITEM)

  useEffect(() => {
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
  }, 1000 * 60 * 2)

  const matchedAreaHospitals = filterHospitals(hospitals, city + area, sortBy)
  const matchedHospitals = filterHospitals(
    hospitals,
    city + area + street,
    sortBy
  )

  const streets = [
    ...new Set(
      matchedAreaHospitals.map(hospital => {
        const start = (city + area).length
        return hospital.properties.address.substring(start, start + 3)
      })
    ),
  ]

  const handleCityChange = city => {
    setCity(city)
    setArea(cities[city][0])
    setStreet("")
    setMaxItem(INIT_MAX_ITEM)
  }

  const handleAreaChange = area => {
    setArea(area)
    setStreet("")
    setMaxItem(INIT_MAX_ITEM)
  }

  const _renderItem = (hospital, index) => (
    <ListItem
      key={index}
      properties={hospital.properties}
      coordinates={hospital.geometry.coordinates}
    />
  )

  return (
    <Layout>
      <SEO title="Need Mask" />
      <>
        <div className="container block01">
          <div className="search">
            <p>點擊位置，尋找你/妳的口罩：</p>
            <div className="select-group">
              <DropDown
                placeHolder
                current={city}
                onChange={handleCityChange}
                values={Object.keys(cities)}
              />
              <span />
              <DropDown
                placeHolder
                current={area}
                onChange={handleAreaChange}
                values={cities[city]}
              />
              <span />
              <DropDown
                placeHolder
                current={street}
                onChange={setStreet}
                values={streets}
              />
            </div>
            <div className="note">
              <p>
                ＊資料每兩分鐘更新一次，預設排序為該區剩餘口罩總計數量 多 > 少。
              </p>
            </div>
          </div>
        </div>

        <div className="container block02">
          <div className="sort">
            <div className="sort-item">
              {/* <p>排序：</p> */}
              <DropDown
                sm
                current={sortBy}
                onChange={setSort}
                values={SORT_ARRAY}
              />
            </div>
          </div>
        </div>

        <div className="container block03">
          <ListItemLabel />
        </div>

        <div className="block04">
          <div className="bg"></div>
          <div className="container item-content-group">
            <LoadMore
              data={matchedHospitals}
              maxItem={maxItem}
              step={STEP}
              onChange={setMaxItem}
              renderItem={_renderItem}
            />
          </div>
        </div>
      </>
    </Layout>
  )
}

export default IndexPage
