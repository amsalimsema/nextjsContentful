function intro() {
  return (
    <div className='text'>
      <h3>first attempt at nextjs with contentful</h3>
      <style jsx>{`
        .text {
          text-transform: uppercase;
          color: teal;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100vw;
        }
      `}</style>
    </div>
  );
}
export default intro;
