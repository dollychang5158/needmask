const SORT_BY_TOTAL = "總數"
const SORT_BY_ADULT = "成人"
const SORT_BY_CHILD = "兒童"
const SORT_ARRAY = [SORT_BY_TOTAL, SORT_BY_ADULT, SORT_BY_CHILD]

const filterHospitals = (hospitals, pattern, sortBy) =>
  hospitals
    .filter(hospital => {
      return hospital.properties.address.indexOf(pattern) !== -1
    })
    .sort(sortFn(sortBy))

const sortFn = sortBy => (a, b) => {
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
export {
  SORT_BY_TOTAL,
  SORT_BY_ADULT,
  SORT_BY_CHILD,
  SORT_ARRAY,
  sortFn,
  filterHospitals,
}
