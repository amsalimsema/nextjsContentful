function Post({ alt, date, image, title, url }) {
  return (
    <div className='cont'>
      <a href={url} style={{ paddingBottom: '2rem' }}>
        <img
          alt={alt}
          src={image}
          style={{ width: '400px', borderRadius: '5px' }}
        />
      </a>

      <div className='text'>
        <h2>{title}</h2>
        <h4>{date}</h4>
      </div>
      <style jsx>{`
        .cont {
          cursor: pointer;
          width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 24px;
          position: absolute;
        }
        h2 {
          color: white;
          font-size: 24px;
          margin-bottom: 0;
        }
        h4 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-weight: 500;
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
}

export default Post;
