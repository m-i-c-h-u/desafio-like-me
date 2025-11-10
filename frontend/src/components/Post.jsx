function Post({
  post: { id, titulo, img, descripcion, likes },
  like,
  eliminarPost,
}) {
  return (
    <div className="card mx-2">
      <div className="card-body p-0 d-flex flex-column h-100">
        <img className="card-img-top" src={img} alt={titulo} />
        <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between">
          <div>
            <h4 className="card-title">{titulo}</h4>
            <p className="card-text">{descripcion}</p>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <i
                onClick={() => like(id)}
                className={`fa-heart fa-xl ${likes ? "fa-solid" : "fa-regular"}`}
              ></i>
              <span className="ms-1">{likes}</span>
            </div>
            <i onClick={() => eliminarPost(id)} className="fa-solid fa-x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
