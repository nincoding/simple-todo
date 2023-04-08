const EmptyItem = ({ text, imgURL }) => {

  return (
    <div className="imgWrap">
      <img src={imgURL} alt="Empty todo Item"/>
      <p>{text}</p>
    </div>
  )
}

export default EmptyItem;