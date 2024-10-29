import React from 'react'

function Email({ isBlack = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="12"
      fill="none"
      viewBox="0 0 21 12"
    >
      <path
        fill={isBlack ? '#000' : "#909389"}
        d="M20.656.436c-.003-.015-.006-.031-.012-.046l-.019-.05c-.006-.015-.016-.031-.024-.047L20.572.25c-.012-.016-.024-.032-.038-.045a.126.126 0 00-.022-.023l-.016-.014a.707.707 0 00-.047-.036c-.016-.01-.028-.02-.044-.032a.352.352 0 00-.054-.026c-.019-.008-.035-.018-.055-.023-.018-.008-.038-.013-.056-.019l-.06-.015-.055-.008a.528.528 0 00-.07-.005c-.005 0-.011-.003-.017-.003L1.296.003c-.006 0-.012.003-.019.003-.022 0-.046.003-.069.005L1.154.02l-.063.016-.054.015C1.019.058.999.065.98.076.964.084.946.091.93.103L.883.134C.867.147.851.157.836.171L.82.184C.81.192.808.199.798.207.786.222.773.235.76.252.75.265.74.28.73.296a.284.284 0 00-.024.047l-.019.05a.218.218 0 00-.012.046.277.277 0 00-.006.055c0 .01-.004.019-.004.029V11.48c0 .287.284.52.631.52h18.738c.348 0 .631-.233.631-.52V.523c0-.01-.004-.019-.004-.029a.283.283 0 00-.006-.058zM14.793 6.73c-.262-.19-.664-.166-.89.052-.227.215-.203.546.062.733l4.81 3.443H2.555L7.218 7.62c.261-.186.29-.516.063-.732a.731.731 0 00-.89-.052L1.927 10.03V1.66l8.325 5.961a.71.71 0 00.412.127.701.701 0 00.413-.127l8.327-5.96v8.369l-4.611-3.3zM2.985 1.042H18.35L10.665 6.54l-7.68-5.497z"
      ></path>
    </svg>
  )
}

export default Email