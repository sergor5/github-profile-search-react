function Avatar({ imageURL }) {
  return (
    <div className=" w-28 h-28 rounded-full border-4 border-green-500 overflow-hidden">
      <img src={imageURL} alt="Github profile avatar" />
    </div>
  );
}

export default Avatar;
