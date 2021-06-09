const StringifyJSON = ({json}) => {
  return (
    <pre>{JSON.stringify(json, null, 2)}</pre>
  )
}
export default StringifyJSON