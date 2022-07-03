function Avatar({ imageURL }) {
  return (
    <div className=" w-20 h-20 rounded-full border-4 border-green-500 overflow-hidden">
      <img src={imageURL} alt="Github profile avatar" />
    </div>
  );
}

export default Avatar;
