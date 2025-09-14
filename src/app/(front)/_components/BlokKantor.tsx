export const BlokKantor = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="mx-5 py-14">
        {/* facilities */}
        <div className="md:grid md:grid-cols-[1fr_2fr] w-full">
          <div>
            <h2>Butuh kantor yang nyaman blabla</h2>
            <p>jangan sampe balabla</p>
            <a href="">Lihat semua</a>
          </div>

          <div className="flex flex-row flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                className="card w-60 bg-base-300 card-md shadow-sm"
                key={item}
              >
                <div className="card-body">
                  <h2 className="card-title">Xsmall Card</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* show rooms  */}
        <div className="mt-15">
          <div className="md:grid md:grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <div className="card bg-base-100 w-full relative">
                  <figure>
                    <img
                      src="https://cdn.pixabay.com/photo/2017/03/27/15/17/apartment-2179337_1280.jpg"
                      alt="Shoes"
                    />
                  </figure>

                  <div className="absolute w-90 bottom-0 left-1/2 -translate-1/2">
                    <div className="glass block w-full p-3 rounded-box">sdf</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
