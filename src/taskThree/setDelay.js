export default function setDelay(time) {

  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}