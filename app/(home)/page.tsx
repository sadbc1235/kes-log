export default function Home() {
  const testCard = [
    0, 1, 2, 3
  ]
  return (
    <section
      className="w-full relative"
    >
      <article
        className="w-full h-[100vh] overflow-hidden bg-[url(/giphy.gif)] bg-no-repeat bg-center bg-fixed bg-cover relative"
      >
        <div
          className="w-full h-[100vh] bg-[#000000aa] absolute top-0"
        ></div>
        <div
          className="w-full h-[70px] absolute top-0"
          style={{border: '1px solid #fff'}}
        ></div>

        <div
          className="relative w-full h-full flex justify-center items-end pb-10"
        >
          <div
            className="w-3/5 h-[700px] whitespace-nowrap overflow-hidden"
          >
            {
              testCard.map((item:any, idx:number) => (
              <div
                className="w-1/3 h-full inline-block"
                style={{border: '1px solid #fff'}}
              >

              </div>
              ))
            }
          </div>
        </div>
      </article>
      <article className="h-[2000px]" style={{border: '1px solid red'}}></article>
    </section>
  );
}
